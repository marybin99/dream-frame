"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useRef, useState } from "react";

function StarParticles() {
  const ref = useRef<THREE.Points>(null!);
  const [positions] = useState(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 8;
    }
    return arr;
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.04}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function FlowingLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full max-w-md mx-auto text-white bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1, delay: 3 }}
      onAnimationComplete={onComplete}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <StarParticles />
      </Canvas>

      {/* 텍스트 */}
      <motion.div
        className="absolute text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-6 text-2xl font-light">🌙 꿈을 해석하고 있어요...</p>
      </motion.div>

      {/* 링 애니메이션 */}
      <motion.div
        className="absolute border-2 rounded-full border-purple-400/40"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{
          scale: [0.8, 1.4, 0.8],
          opacity: [0.8, 0.2, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "220px",
          height: "220px",
        }}
      />
    </motion.div>
  );
}
