"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export default function UXBScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Get actual pixel dimensions from the container div
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Renderer attached to a NEW canvas, appended into the div
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x080808, 1);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 200);
    camera.position.z = 12;

    function resize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);

    /* ── Glow ── */
    function makeGlow(alpha, size) {
      const sz = 256;
      const c = document.createElement("canvas");
      c.width = sz;
      c.height = sz;
      const ctx = c.getContext("2d");
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, `rgba(255,255,255,${alpha})`);
      g.addColorStop(0.3, `rgba(220,220,220,${alpha * 0.5})`);
      g.addColorStop(0.6, `rgba(180,180,180,${alpha * 0.15})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, sz, sz);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(size, size, 1);
      return sp;
    }

    const glows = [makeGlow(0.6, 4), makeGlow(0.3, 6), makeGlow(0.12, 8)];
    glows.forEach((g) => scene.add(g));

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(3, 4, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0xffffff, 1.8, 50);
    fill.position.set(0, 0, 6);
    scene.add(fill);

    /* ── Text ── */
    const group = new THREE.Group();
    scene.add(group);

    new FontLoader().load(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json",
      (font) => {
        const configs = [
          { ch: "U", color: 0xffffff, emissive: 0xffffff },
          { ch: "X", color: 0x111111, emissive: 0x444444 },
          { ch: "B", color: 0xdddddd, emissive: 0xffffff },
        ];

        // Build each letter, measure it, then place side by side
        const meshes = configs.map(({ ch, color, emissive }) => {
          const geo = new TextGeometry(ch, {
            font,
            size: 1.0,
            height: 0.3,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.04,
            bevelSize: 0.025,
            bevelSegments: 5,
          });
          geo.computeBoundingBox();
          const mat = new THREE.MeshStandardMaterial({
            color,
            emissive,
            emissiveIntensity: 0.15,
            metalness: 0.85,
            roughness: 0.12,
          });
          return { mesh: new THREE.Mesh(geo, mat), bb: geo.boundingBox };
        });

        const gap = 0.25;
        const totalWidth =
          meshes.reduce((sum, { bb }) => sum + (bb.max.x - bb.min.x), 0) +
          gap * (meshes.length - 1);
        let cursor = -totalWidth / 2;

        meshes.forEach(({ mesh, bb }) => {
          const lw = bb.max.x - bb.min.x;
          const lh = bb.max.y - bb.min.y;
          mesh.position.set(cursor, -lh / 2, 0);
          cursor += lw + gap;
          group.add(mesh);
        });
      },
    );

    /* ── Mouse tilt ── */
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const onMove = (e) => {
      const r = mount.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -0.2;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    mount.addEventListener("mousemove", onMove);
    mount.addEventListener("mouseleave", onLeave);

    /* ── Loop ── */
    const clock = new THREE.Clock();
    let id;
    const lerp = (a, b, t) => a + (b - a) * t;

    (function animate() {
      id = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      cx = lerp(cx, tx, 0.07);
      cy = lerp(cy, ty, 0.07);
      group.rotation.y = cx;
      group.rotation.x = cy;
      glows.forEach((g, i) => {
        g.material.opacity = 0.85 + 0.15 * Math.sin(t + i);
      });
      fill.intensity = 1.7 + 0.4 * Math.sin(t * 1.2);
      renderer.render(scene, camera);
    })();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("mousemove", onMove);
      mount.removeEventListener("mouseleave", onLeave);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", background: "#080808" }}
    />
  );
}
