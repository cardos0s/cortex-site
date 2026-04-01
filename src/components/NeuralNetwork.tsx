"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 200;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel];
  }, []);

  const lineGeometry = useRef(new THREE.BufferGeometry());
  const linePositions = useRef(new Float32Array(count * count * 6));
  const lineColors = useRef(new Float32Array(count * count * 6));

  useFrame((state) => {
    if (!meshRef.current) return;
    const posArray = meshRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3] + Math.sin(time * 0.5 + i) * 0.001;
      posArray[i * 3 + 1] +=
        velocities[i * 3 + 1] + Math.cos(time * 0.3 + i) * 0.001;
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      for (let j = 0; j < 3; j++) {
        if (Math.abs(posArray[i * 3 + j]) > 5) {
          velocities[i * 3 + j] *= -1;
        }
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw lines between nearby particles
    let lineIndex = 0;
    const maxDist = 2.0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          const alpha = 1 - dist / maxDist;
          linePositions.current[lineIndex * 6] = posArray[i * 3];
          linePositions.current[lineIndex * 6 + 1] = posArray[i * 3 + 1];
          linePositions.current[lineIndex * 6 + 2] = posArray[i * 3 + 2];
          linePositions.current[lineIndex * 6 + 3] = posArray[j * 3];
          linePositions.current[lineIndex * 6 + 4] = posArray[j * 3 + 1];
          linePositions.current[lineIndex * 6 + 5] = posArray[j * 3 + 2];

          // Purple gradient
          lineColors.current[lineIndex * 6] = alpha * 0.55;
          lineColors.current[lineIndex * 6 + 1] = alpha * 0.36;
          lineColors.current[lineIndex * 6 + 2] = alpha * 0.96;
          lineColors.current[lineIndex * 6 + 3] = alpha * 0.65;
          lineColors.current[lineIndex * 6 + 4] = alpha * 0.55;
          lineColors.current[lineIndex * 6 + 5] = alpha * 0.98;

          lineIndex++;
        }
      }
    }

    lineGeometry.current.setAttribute(
      "position",
      new THREE.BufferAttribute(
        linePositions.current.slice(0, lineIndex * 6),
        3
      )
    );
    lineGeometry.current.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors.current.slice(0, lineIndex * 6), 3)
    );
    lineGeometry.current.attributes.position.needsUpdate = true;
    lineGeometry.current.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#8b5cf6"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <lineSegments geometry={lineGeometry.current}>
        <lineBasicMaterial vertexColors transparent opacity={0.3} />
      </lineSegments>
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
