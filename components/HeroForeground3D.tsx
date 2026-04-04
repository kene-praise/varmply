'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ─────────────────────────────────────────
   Geometry factories (same as background)
──────────────────────────────────────────*/
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
  shape.lineTo(-hw + r + 0.28, -hh);
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
  shape.moveTo(0, 0);
  shape.lineTo(0.30, 0.34);
  shape.lineTo(-0.04, 0.34);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.20, bevelEnabled: true,
    bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2,
  });
}

/* ─────────────────────────────────────────
   Orbit definitions.
   These icons orbit at higher z (4–6) so they
   appear IN FRONT of the glass box (z-25 canvas).
   Phase-shifted from background so foreground
   icons are on the opposite side of the loop —
   together they look like a continuous orbit
   wrapping around the box.
──────────────────────────────────────────*/
type OrbitDef = {
  type: 'heart' | 'plane' | 'comment';
  color: string;
  cx: number; cy: number; cz: number;
  rx: number; ry: number; rz: number;
  speed: number;
  phase: number;
  spinX: number; spinY: number;
};

const ORBITS: OrbitDef[] = [
  // Heart — phase offset by π from background heart 1 — opposite side of loop
  { type: 'heart',   color: '#FF2D78', cx: 4.8, cy:  0.8, cz: 4.8, rx: 3.0, ry: 1.6, rz: 1.2, speed: 0.22, phase: 0.00 + Math.PI, spinX: 0.004, spinY: 0.007 },
  // Plane — offset from background plane 1
  { type: 'plane',   color: '#67E8F9', cx: 6.2, cy:  1.8, cz: 5.0, rx: 1.6, ry: 2.8, rz: 1.0, speed: 0.28, phase: 1.05 + Math.PI, spinX: 0.006, spinY: 0.005 },
  // Comment — offset from background comment 1
  { type: 'comment', color: '#38BDF8', cx: 5.6, cy: -0.4, cz: 4.6, rx: 2.4, ry: 2.0, rz: 1.0, speed: 0.18, phase: 2.09 + Math.PI, spinX: 0.003, spinY: 0.008 },
  // Heart — offset from background heart 2
  { type: 'heart',   color: '#FF3CAC', cx: 7.2, cy: -2.0, cz: 5.2, rx: 2.8, ry: 1.4, rz: 0.8, speed: 0.24, phase: 3.14 + Math.PI, spinX: 0.005, spinY: 0.006 },
  // Plane — offset from background plane 2
  { type: 'plane',   color: '#06B6D4', cx: 8.4, cy:  0.6, cz: 4.8, rx: 1.8, ry: 2.2, rz: 1.0, speed: 0.32, phase: 4.19 + Math.PI, spinX: 0.007, spinY: 0.004 },
  // Comment — offset from background comment 2
  { type: 'comment', color: '#FBBF24', cx: 6.8, cy:  3.0, cz: 5.0, rx: 2.2, ry: 1.6, rz: 0.9, speed: 0.20, phase: 5.24 + Math.PI, spinX: 0.004, spinY: 0.009 },
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

    const groups: { group: THREE.Group; def: OrbitDef }[] = ORBITS.map((def) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(def.color),
        roughness: 0.05, metalness: 0.0,
        clearcoat: 1.0, clearcoatRoughness: 0.04,
        reflectivity: 0.95, sheen: 0.3, sheenRoughness: 0.4,
        sheenColor: new THREE.Color(0xffffff),
      });

      const group = new THREE.Group();
      group.scale.set(0.52, 0.52, 0.52);

      if (def.type === 'heart') {
        const mesh = new THREE.Mesh(heartGeom, mat);
        mesh.position.set(-0.51 * 0.58, -0.76 * 0.58, -0.15 * 0.58);
        group.add(mesh);
      } else if (def.type === 'plane') {
        const mesh = new THREE.Mesh(planeGeom, mat);
        mesh.position.set(0, -0.04, -0.07);
        group.add(mesh);
      } else {
        const body = new THREE.Mesh(commentGeom, mat);
        body.position.set(0, 0.05, -0.12);
        group.add(body);
        const tail = new THREE.Mesh(tailGeom, mat.clone());
        tail.position.set(-0.66, -0.50, -0.10);
        group.add(tail);
      }

      scene.add(group);
      return { group, def };
    });

    const clock = new THREE.Clock();
    let animId: number;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      groups.forEach(({ group, def }) => {
        const a = t * def.speed + def.phase;
        group.position.x = def.cx + def.rx * Math.cos(a);
        group.position.y = def.cy + def.ry * Math.sin(a);
        group.position.z = def.cz + def.rz * Math.sin(a);

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
