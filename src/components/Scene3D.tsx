"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ImagePlane() {
  const texture = useTexture("/images/macro-polos/hero.jpg");

  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    const targetRotationY = state.pointer.x * 0.035;
    const targetRotationX = -state.pointer.y * 0.025;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotationY,
      0.025,
    );

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotationX,
      0.025,
    );

    const time = state.clock.getElapsedTime();

    meshRef.current.position.z = Math.sin(time * 0.18) * 0.035;
  });

  return (
    <mesh
      ref={meshRef}
      scale={[viewport.width * 1.08, viewport.height * 1.08, 1]}
    >
      <planeGeometry args={[1, 1, 32, 32]} />

      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ImagePlane />
      </Canvas>
    </div>
  );
}
