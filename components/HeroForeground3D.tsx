'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function makeHeartGeom(): THREE.ExtrudeGeometry {
  const s = 0.58;
  const shape = new THREE.Shape();
  shape.moveTo(0, s * 0.38);
  shape.bezierCurveTo(0, s * 0.38, -s * 0.1, 0, -s * 0.42, 0);
  shape.bezierCurveTo(-s * 0.88, 0, -s * 0.88, s * 0.62, -s * 0.88, s * 0.62);
  shape.bezierCurveTo(-s * 0.88, s * 0.96, -s * 0.52, s * 1.22, 0, s * 1.52);
  shape.bezierCurveTo(s * 0.52, s * 1.22, s * 0.88, s * 0.96, s * 0.88, s * 0.62);
  shape.bezierCurveTo(s * 0.88, s * 0.62, s * 0.88, 0, s * 0.42, 0);
  shape.bezierCurveTo(s * 0.1, 0, 0, s * 0.38, 0, s * 0.38);
  return new THREE.ExtrudeGeometry(shape, {
    depth: s * 0.3, bevelEnabled: true,
    bevelThickness: s * 0.07, bevelSize: s * 0.05, bevelSegments: 5,
  });
}

function makePlaneGeom(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.68);
  shape.lineTo(-0.72, -0.52);
  shape.lineTo(-0.06, -0.12);
  shape.lineTo(0, -0.6);
  shape.lineTo(0.06, -0.12);
  shape.lineTo(0.72, -0.52);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.14, bevelEnabled: true,
    bevelThickness: 0.05, bevelSize: 0.03, bevelSegments: 3,
  });
}

function makeCommentGeom(): THREE.ExtrudeGeometry {
  const w = 1.4, h = 1.0, r = 0.24;
  const hw = w / 2, hh = h / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-hw + r, -hh);
  shape.lineTo(hw - r, -hh);
  shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
  shape.lineTo(hw, hh - r);
  shape.quadraticCurveTo(hw, hh, hw - r, hh);
  shape.lineTo(-hw + r, hh);
  shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
  shape.lineTo(-hw, -hh + r);
  shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.24, bevelEnabled: true,
    bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 4,
  });
}

function makeCommentTailGeom(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0); shape.lineTo(0.30, 0.34); shape.lineTo(-0.04, 0.34);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.20, bevelEnabled: true,
    bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2,
  });
}

// ── Foreground rising particles (in front of glass box, z ≈ 4.5–5.5) ─────────
// Same rise-from-bottom behaviour. Phase-offset from background so together
// there's always a constant stream at multiple depths simultaneously.

const START_Y = -3.8;  // bottom edge of the phone container box
const END_Y   =  4.8;  // top edge of the phone container box
const TRAVEL  = END_Y - START_Y;

type ParticleDef = {
  type: 'heart' | 'plane' | 'comment';
  color: string;
  spawnX: number;
  spawnZ: number;
  xDrift: number;
  lifetime: number;
  birthOffset: number;
  spinX: number;
  spinY: number;
};

const PARTICLES: ParticleDef[] = [
  { type: 'heart',   color: '#FF2D78', spawnX: 5.4, spawnZ: 5.0, xDrift: 0.28, lifetime: 7.8, birthOffset: 0.28, spinX: 0.010, spinY: 0.015 },
  { type: 'plane',   color: '#67E8F9', spawnX: 5.2, spawnZ: 4.6, xDrift: 0.32, lifetime: 8.4, birthOffset: 1.12, spinX: 0.013, spinY: 0.009 },
  { type: 'comment', color: '#38BDF8', spawnX: 5.6, spawnZ: 5.2, xDrift: 0.24, lifetime: 7.2, birthOffset: 1.96, spinX: 0.009, spinY: 0.017 },
  { type: 'heart',   color: '#FF6B6B', spawnX: 5.3, spawnZ: 4.8, xDrift: 0.30, lifetime: 8.0, birthOffset: 2.80, spinX: 0.012, spinY: 0.013 },
  { type: 'plane',   color: '#06B6D4', spawnX: 5.5, spawnZ: 5.4, xDrift: 0.26, lifetime: 7.5, birthOffset: 3.64, spinX: 0.010, spinY: 0.011 },
  { type: 'comment', color: '#FBBF24', spawnX: 5.4, spawnZ: 4.9, xDrift: 0.22, lifetime: 8.6, birthOffset: 4.48, spinX: 0.014, spinY: 0.008 },
  { type: 'heart',   color: '#A855F7', spawnX: 5.2, spawnZ: 5.1, xDrift: 0.34, lifetime: 7.0, birthOffset: 5.32, spinX: 0.011, spinY: 0.016 },
  { type: 'plane',   color: '#84CC16', spawnX: 5.6, spawnZ: 4.7, xDrift: 0.28, lifetime: 8.2, birthOffset: 6.16, spinX: 0.008, spinY: 0.014 },
];

export default function HeroForeground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
    camera.position.set(-3, 0, 13);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 4.5);
    key.position.set(6, 12, 10); scene.add(key);
    const fill = new THREE.DirectionalLight(0xb0c4ff, 2.0);
    fill.position.set(-8, 2, 6); scene.add(fill);
    const rim = new THREE.DirectionalLight(0xff80ff, 1.8);
    rim.position.set(2, -4, -8); scene.add(rim);

    const heartGeom   = makeHeartGeom();
    const planeGeom   = makePlaneGeom();
    const commentGeom = makeCommentGeom();
    const tailGeom    = makeCommentTailGeom();

    type Instance = { group: THREE.Group; mats: THREE.MeshPhysicalMaterial[]; def: ParticleDef };

    const instances: Instance[] = PARTICLES.map((def) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(def.color),
        roughness: 0.05, metalness: 0.0,
        clearcoat: 1.0, clearcoatRoughness: 0.04,
        reflectivity: 0.95, sheen: 0.3, sheenRoughness: 0.4,
        sheenColor: new THREE.Color(0xffffff),
        transparent: true, opacity: 0,
      });

      const group = new THREE.Group();
      const mats: THREE.MeshPhysicalMaterial[] = [mat];

      if (def.type === 'heart') {
        const mesh = new THREE.Mesh(heartGeom, mat);
        mesh.position.set(-0.51 * 0.58, -0.76 * 0.58, -0.15 * 0.58);
        group.add(mesh);
      } else if (def.type === 'plane') {
        const mesh = new THREE.Mesh(planeGeom, mat);
        mesh.position.set(0, -0.04, -0.07);
        group.add(mesh);
      } else {
        const tailMat = mat.clone();
        mats.push(tailMat);
        const body = new THREE.Mesh(commentGeom, mat);
        body.position.set(0, 0.05, -0.12);
        group.add(body);
        const tail = new THREE.Mesh(tailGeom, tailMat);
        tail.position.set(-0.66, -0.50, -0.10);
        group.add(tail);
      }

      group.position.set(def.spawnX, START_Y, def.spawnZ);
      group.scale.setScalar(0.01);
      scene.add(group);
      return { group, mats, def };
    });

    const clock = new THREE.Clock();
    let animId: number;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      instances.forEach(({ group, mats, def }) => {
        const age = ((t - def.birthOffset) % def.lifetime + def.lifetime) % def.lifetime;
        const progress = age / def.lifetime;

        group.position.y = START_Y + TRAVEL * progress;
        group.position.x = def.spawnX + def.xDrift * Math.sin(progress * Math.PI * 2.0 + def.birthOffset);
        group.position.z = def.spawnZ;

        // Scale: smoothstep ramp in first 25%, then hold
        const growT = Math.min(progress / 0.25, 1.0);
        const grow = growT * growT * (3 - 2 * growT);
        group.scale.setScalar(0.37 * (0.06 + 0.94 * grow));

        // Opacity: fade in 0–15%, full 15–80%, fade out 80–100%
        let opacity: number;
        if (progress < 0.15)      opacity = progress / 0.15;
        else if (progress > 0.80) opacity = (1.0 - progress) / 0.20;
        else                      opacity = 1.0;
        mats.forEach(m => { m.opacity = Math.max(0, Math.min(1, opacity)); });

        group.rotation.x += def.spinX;
        group.rotation.y += def.spinY;
      });

      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      if (!el) return;
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh; camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      heartGeom.dispose(); planeGeom.dispose();
      commentGeom.dispose(); tailGeom.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 25 }}
    />
  );
}
