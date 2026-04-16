'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─── Audiomack geometric logo (concentric ring circles) ───────────────────────
const LOGO_Z = 0.73;
const LOGO_OPTS = {
  depth: 0.20,
  bevelEnabled: true as const,
  bevelThickness: 0.025, bevelSize: 0.018, bevelSegments: 3,
};

function makeAudiomackRings(): THREE.ExtrudeGeometry[] {
  const rings = [
    { r1: 0.08, r2: 0.18 },
    { r1: 0.28, r2: 0.38 },
    { r1: 0.48, r2: 0.57 },
  ];
  return rings.map(({ r1, r2 }) => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, r2, 0, Math.PI * 2, false);
    const hole = new THREE.Path();
    hole.absarc(0, 0, r1, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    const g = new THREE.ExtrudeGeometry(shape, LOGO_OPTS);
    g.translate(0, 0, LOGO_Z);
    return g;
  });
}

// ─── Foreground rising particles (z ≈ 4.6–5.4, passes in front of glass box) ─
const START_Y = -3.8;
const END_Y   =  4.8;
const TRAVEL  = END_Y - START_Y;

type IconType = 'spotify' | 'applemusic' | 'soundcloud' | 'audiomack';

type ParticleDef = {
  type: IconType;
  spawnX: number;
  spawnZ: number;
  xDrift: number;
  lifetime: number;
  birthOffset: number;
  spinX: number;
  spinY: number;
};

const PARTICLES: ParticleDef[] = [
  { type: 'spotify',    spawnX: 5.4, spawnZ: 5.0, xDrift: 0.28, lifetime: 7.8, birthOffset: 0.28, spinX: 0.010, spinY: 0.015 },
  { type: 'soundcloud', spawnX: 5.2, spawnZ: 4.6, xDrift: 0.32, lifetime: 8.4, birthOffset: 1.12, spinX: 0.013, spinY: 0.009 },
  { type: 'applemusic', spawnX: 5.6, spawnZ: 5.2, xDrift: 0.24, lifetime: 7.2, birthOffset: 1.96, spinX: 0.009, spinY: 0.017 },
  { type: 'audiomack',  spawnX: 5.3, spawnZ: 4.8, xDrift: 0.30, lifetime: 8.0, birthOffset: 2.80, spinX: 0.012, spinY: 0.013 },
  { type: 'soundcloud', spawnX: 5.5, spawnZ: 5.4, xDrift: 0.26, lifetime: 7.5, birthOffset: 3.64, spinX: 0.010, spinY: 0.011 },
  { type: 'spotify',    spawnX: 5.4, spawnZ: 4.9, xDrift: 0.22, lifetime: 8.6, birthOffset: 4.48, spinX: 0.014, spinY: 0.008 },
  { type: 'audiomack',  spawnX: 5.2, spawnZ: 5.1, xDrift: 0.34, lifetime: 7.0, birthOffset: 5.32, spinX: 0.011, spinY: 0.016 },
  { type: 'applemusic', spawnX: 5.6, spawnZ: 4.7, xDrift: 0.28, lifetime: 8.2, birthOffset: 6.16, spinX: 0.008, spinY: 0.014 },
];

const AUDIOMACK_COLOR = '#FE6D00';

export default function HomeHeroForeground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Sync setup ────────────────────────────────────────────────────────────
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
    const key = new THREE.DirectionalLight(0xffffff, 5.0);
    key.position.set(6, 12, 10); scene.add(key);
    const fill = new THREE.DirectionalLight(0xb0c4ff, 2.0);
    fill.position.set(-8, 2, 6); scene.add(fill);
    const specPt = new THREE.PointLight(0xffffff, 8.0, 40);
    specPt.position.set(4, 10, 18); scene.add(specPt);

    let animId = -1;
    let cancelled = false;
    const allMaterials: THREE.Material[] = [];

    const sphereGeom = new THREE.SphereGeometry(0.72, 64, 64);
    const audiomackRings = makeAudiomackRings();

    // ── Async: load PNG textures then build instances ─────────────────────────
    const run = async () => {
      const loader = new THREE.TextureLoader();
      const [tSpotify, tApple, tSoundcloud] = await Promise.all([
        loader.loadAsync('/brand-icons/spotify.png'),
        loader.loadAsync('/brand-icons/apple-music.png'),
        loader.loadAsync('/brand-icons/soundcloud.png'),
      ]);

      if (cancelled) {
        [tSpotify, tApple, tSoundcloud].forEach(t => t.dispose());
        return;
      }

      [tSpotify, tApple, tSoundcloud].forEach(t => { t.colorSpace = THREE.SRGBColorSpace; });
      const texMap: Record<string, THREE.Texture> = {
        spotify: tSpotify, applemusic: tApple, soundcloud: tSoundcloud,
      };

      type Instance = { group: THREE.Group; mats: THREE.Material[]; def: ParticleDef };

      const instances: Instance[] = PARTICLES.map((def) => {
        const group = new THREE.Group();
        const mats: THREE.Material[] = [];

        if (def.type === 'audiomack') {
          const addPhys = (geom: THREE.BufferGeometry, color: string, roughness = 0.06) => {
            const mat = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color(color),
              roughness, metalness: 0.0,
              clearcoat: 1.0, clearcoatRoughness: 0.02,
              transparent: true, opacity: 0,
            });
            allMaterials.push(mat);
            mats.push(mat);
            group.add(new THREE.Mesh(geom, mat));
          };
          addPhys(sphereGeom, AUDIOMACK_COLOR);
          audiomackRings.forEach(g => addPhys(g, '#FFFFFF', 0.08));
        } else {
          const mat = new THREE.MeshBasicMaterial({
            map: texMap[def.type],
            transparent: true,
            opacity: 0,
          });
          allMaterials.push(mat);
          mats.push(mat);
          const m = new THREE.Mesh(sphereGeom, mat);
          m.rotation.y = -Math.PI / 2;
          group.add(m);
        }

        group.position.set(def.spawnX, START_Y, def.spawnZ);
        group.scale.setScalar(0.01);
        scene.add(group);
        return { group, mats, def };
      });

      const clock = new THREE.Clock();

      const tick = () => {
        if (cancelled) return;
        animId = requestAnimationFrame(tick);
        const t = clock.getElapsedTime();

        instances.forEach(({ group, mats, def }) => {
          const age      = ((t - def.birthOffset) % def.lifetime + def.lifetime) % def.lifetime;
          const progress = age / def.lifetime;

          group.position.y = START_Y + TRAVEL * progress;
          group.position.x = def.spawnX + def.xDrift * Math.sin(progress * Math.PI * 2.0 + def.birthOffset);
          group.position.z = def.spawnZ;

          const growT = Math.min(progress / 0.25, 1.0);
          const grow  = growT * growT * (3 - 2 * growT);
          group.scale.setScalar(0.34 * (0.06 + 0.94 * grow));

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
    };

    run().catch(console.error);

    const onResize = () => {
      if (!el) return;
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh; camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      sphereGeom.dispose();
      audiomackRings.forEach(g => g.dispose());
      allMaterials.forEach(m => m.dispose());
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
