'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

/* ─────────────────────────────────────────
   Geometry factories
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
    depth: s * 0.3,
    bevelEnabled: true,
    bevelThickness: s * 0.07,
    bevelSize: s * 0.05,
    bevelSegments: 5,
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
    depth: 0.14,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.03,
    bevelSegments: 3,
  });
}

function makeRoundedRect(w: number, h: number, r: number): THREE.Shape {
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
  return shape;
}

function makeBubbleGeom(): THREE.ExtrudeGeometry {
  const w = 1.3, h = 0.95, r = 0.22;
  const shape = makeRoundedRect(w, h, r);
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.22,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.04,
    bevelSegments: 4,
  });
}

function makeTailGeom(): THREE.BufferGeometry {
  // Small triangle tail for speech bubble
  const geom = new THREE.ConeGeometry(0.12, 0.28, 3);
  geom.rotateZ(Math.PI / 6);
  return geom;
}

/* ─────────────────────────────────────────
   Icon types and palette
──────────────────────────────────────────*/
type IconType = 'heart' | 'plane' | 'bubble';

const ICONS: IconType[] = ['heart', 'plane', 'bubble', 'heart', 'bubble', 'plane', 'heart', 'plane'];

// Vibrant, saturated colors per icon type — pop against #7433FF
const PALETTE = [
  '#FF3CAC', // heart   — hot pink-magenta
  '#22D3EE', // plane   — electric cyan
  '#FBBF24', // bubble  — warm amber-gold
  '#FF6B6B', // heart   — coral-red
  '#A78BFA', // bubble  — soft violet (contrast)
  '#38BDF8', // plane   — sky blue
  '#FF2D78', // heart   — deep hot pink
  '#06B6D4', // plane   — teal-cyan
];

/* ─────────────────────────────────────────
   Stacked positions — tight bottom-right cluster
──────────────────────────────────────────*/
const STACK = [
  { x:  8.4, y: -4.6, z: 0.05, rx:  0.06, ry: -0.08, rz:  0.04 },
  { x:  8.1, y: -3.9, z: 0.12, rx: -0.07, ry: -0.12, rz: -0.05 },
  { x:  8.3, y: -3.2, z: 0.08, rx:  0.10, ry:  0.09, rz:  0.03 },
  { x:  8.0, y: -2.5, z: 0.04, rx: -0.04, ry: -0.14, rz:  0.06 },
  { x:  8.2, y: -1.8, z: 0.10, rx:  0.12, ry:  0.06, rz: -0.04 },
  { x:  7.9, y: -1.1, z: 0.06, rx: -0.08, ry: -0.10, rz:  0.05 },
  { x:  8.1, y: -0.4, z: 0.09, rx:  0.07, ry: -0.08, rz: -0.06 },
  { x:  7.8, y:  0.3, z: 0.03, rx: -0.05, ry:  0.12, rz:  0.08 },
];

/* ─────────────────────────────────────────
   Fan positions — S-curve in bottom-right quadrant
──────────────────────────────────────────*/
const FAN = [
  { x:  9.8, y: -5.2, z: 2.2, rx:  0.45, ry:  0.55, rz:  0.7  },
  { x:  8.4, y: -3.8, z: 2.8, rx:  0.25, ry:  0.35, rz:  0.45 },
  { x:  6.8, y: -2.2, z: 2.4, rx:  0.05, ry:  0.10, rz:  0.2  },
  { x:  5.4, y: -0.6, z: 1.6, rx: -0.15, ry: -0.15, rz: -0.05 },
  { x:  4.6, y:  1.0, z: 0.8, rx: -0.35, ry: -0.35, rz: -0.3  },
  { x:  5.6, y:  2.4, z: 0.1, rx: -0.25, ry: -0.20, rz: -0.5  },
  { x:  7.2, y:  3.5, z: -0.6,rx:  0.10, ry:  0.10, rz: -0.55 },
  { x:  8.8, y:  4.4, z: -1.2,rx:  0.35, ry:  0.30, rz: -0.4  },
];

/* ─────────────────────────────────────────
   Main component
──────────────────────────────────────────*/
export default function HeroBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#7433FF');

    /* ── Camera — offset left so icons sit right → open space on left for text ── */
    const w = el.clientWidth;
    const h = el.clientHeight;
    const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
    camera.position.set(-3, 0, 13);
    camera.lookAt(0, 0, 0);

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    /* ── Lights — high-spec studio for glossy surfaces ── */
    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambient);

    // Key — warm white from upper front-right, strong specular source
    const key = new THREE.DirectionalLight(0xffffff, 4.5);
    key.position.set(6, 12, 10);
    scene.add(key);

    // Fill — cool blue-lavender from left, lifts shadow side
    const fill = new THREE.DirectionalLight(0xb0c4ff, 2.0);
    fill.position.set(-8, 2, 6);
    scene.add(fill);

    // Rim — magenta-purple from behind, separates shapes from bg
    const rim = new THREE.DirectionalLight(0xff80ff, 1.8);
    rim.position.set(2, -4, -8);
    scene.add(rim);

    // Kicker — warm top light for extra gloss
    const kicker = new THREE.DirectionalLight(0xfff0e0, 2.2);
    kicker.position.set(-3, 10, 4);
    scene.add(kicker);

    /* ── Geometry cache ── */
    const heartGeom  = makeHeartGeom();
    const planeGeom  = makePlaneGeom();
    const bubbleGeom = makeBubbleGeom();
    const tailGeom   = makeTailGeom();

    /* ── Build icons ── */
    const groups: THREE.Group[] = [];

    ICONS.forEach((type, i) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(PALETTE[i]),
        roughness: 0.05,
        metalness: 0.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        reflectivity: 0.95,
        sheen: 0.3,
        sheenRoughness: 0.4,
        sheenColor: new THREE.Color(0xffffff),
      });

      const group = new THREE.Group();
      const s = STACK[i];
      group.position.set(s.x, s.y, s.z);
      group.rotation.set(s.rx, s.ry, s.rz);

      if (type === 'heart') {
        const mesh = new THREE.Mesh(heartGeom, mat);
        // Center the extruded heart (extruded along Z, shape sits in XY)
        mesh.position.set(-0.51 * 0.58, -0.76 * 0.58, -0.15 * 0.58);
        group.add(mesh);

      } else if (type === 'plane') {
        const mesh = new THREE.Mesh(planeGeom, mat);
        mesh.position.set(0, -0.04, -0.07);
        group.add(mesh);

      } else {
        // Bubble body
        const body = new THREE.Mesh(bubbleGeom, mat);
        body.position.set(0, 0, -0.11);
        group.add(body);
        // Tail
        const tailMat = mat.clone();
        const tail = new THREE.Mesh(tailGeom, tailMat);
        tail.position.set(-0.38, -0.56, 0);
        group.add(tail);
      }

      scene.add(group);
      groups.push(group);
    });

    /* ── GSAP animation — elastic fan + seamless retract ── */
    const LOOP_DUR = 5.8; // seconds per full cycle

    groups.forEach((group, i) => {
      const s = STACK[i];
      const f = FAN[i];
      const stagger = i * 0.09;
      const tl = gsap.timeline({ repeat: -1, delay: stagger });

      // Phase 1 — hold at stack
      tl.to(group.position, { x: s.x, y: s.y, z: s.z, duration: 1.0, ease: 'none' });

      // Phase 2 — elastic fan-out (stagger each icon slightly behind previous)
      tl.to(group.position,
        { x: f.x, y: f.y, z: f.z, duration: 1.6, ease: 'elastic.out(1, 0.55)', delay: i * 0.04 },
        '>-0.8',
      );
      tl.to(group.rotation,
        { x: f.rx, y: f.ry, z: f.rz, duration: 1.6, ease: 'elastic.out(1, 0.55)', delay: i * 0.04 },
        '<',
      );

      // Phase 3 — hold at fan peak
      tl.to(group.position, { x: f.x, y: f.y, z: f.z, duration: 1.2, ease: 'none' });

      // Phase 4 — weightless retract back to stack
      tl.to(group.position,
        { x: s.x, y: s.y, z: s.z, duration: 1.0, ease: 'power3.inOut' },
        '>',
      );
      tl.to(group.rotation,
        { x: s.rx, y: s.ry, z: s.rz, duration: 1.0, ease: 'power3.inOut' },
        '<',
      );
    });

    /* ── Render loop ── */
    let animId: number;
    const tick = () => {
      animId = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();

    /* ── Resize ── */
    const onResize = () => {
      if (!el) return;
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    /* ── Cleanup ── */
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      gsap.globalTimeline.clear();
      renderer.dispose();
      heartGeom.dispose();
      planeGeom.dispose();
      bubbleGeom.dispose();
      tailGeom.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
