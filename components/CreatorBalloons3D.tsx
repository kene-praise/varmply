'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ─────────────────────────────────────────
   Geometry factories (re-used from other 3D elements)
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
   Balloon definitions
──────────────────────────────────────────*/
type BalloonDef = {
    type: 'heart' | 'plane' | 'comment';
    color: string;
    x: number; z: number;
    ceiling: number; // Y value where they hit the roof
    bounceHeight: number; // How far they drop before going back up
    speed: number;
    phase: number;
    spinX: number; spinY: number;
};

const BALLOONS: BalloonDef[] = [
    { type: 'heart', color: '#FF2D78', x: -4.5, z: 2.0, ceiling: 3.5, bounceHeight: 1.5, speed: 1.6, phase: 0.0, spinX: 0.004, spinY: 0.007 },
    { type: 'plane', color: '#67E8F9', x: -2.0, z: 3.0, ceiling: 4.2, bounceHeight: 1.2, speed: 1.4, phase: 1.2, spinX: 0.006, spinY: 0.005 },
    { type: 'comment', color: '#10B981', x: 2.5, z: 1.5, ceiling: 3.8, bounceHeight: 2.0, speed: 1.8, phase: 2.1, spinX: 0.003, spinY: 0.008 },
    { type: 'heart', color: '#F59E0B', x: 5.0, z: 2.5, ceiling: 4.5, bounceHeight: 1.8, speed: 1.5, phase: 3.5, spinX: 0.005, spinY: 0.006 },
    { type: 'plane', color: '#8B5CF6', x: 0.5, z: 1.0, ceiling: 4.0, bounceHeight: 1.4, speed: 1.7, phase: 0.8, spinX: 0.007, spinY: 0.004 },
    { type: 'comment', color: '#EC4899', x: -6.0, z: 2.8, ceiling: 4.8, bounceHeight: 1.6, speed: 1.9, phase: 4.2, spinX: 0.004, spinY: 0.009 },
];

export default function CreatorBalloons3D() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = mountRef.current;
        if (!el) return;

        const w = el.clientWidth, h = el.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
        camera.position.set(0, 0, 12);
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

        const heartGeom = makeHeartGeom();
        const planeGeom = makePlaneGeom();
        const commentGeom = makeCommentGeom();
        const tailGeom = makeCommentTailGeom();

        const groups: { group: THREE.Group; def: BalloonDef }[] = BALLOONS.map((def) => {
            const mat = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(def.color),
                roughness: 0.05, metalness: 0.0,
                clearcoat: 1.0, clearcoatRoughness: 0.04,
                reflectivity: 0.95, sheen: 0.3, sheenRoughness: 0.4,
                sheenColor: new THREE.Color(0xffffff),
            });

            const group = new THREE.Group();
            group.scale.set(0.6, 0.6, 0.6);

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

                // Bounce off ceiling: Math.abs(Math.sin) creates a sharp "bounce" at 0.
                const bounceOffset = Math.abs(Math.sin(a)) * def.bounceHeight;

                group.position.x = def.x;
                // Bounce off the top (ceiling) downwards
                group.position.y = def.ceiling - bounceOffset;
                group.position.z = def.z;

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
            style={{ zIndex: 5 }}
        />
    );
}
