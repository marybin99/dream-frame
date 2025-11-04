"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
};

export default function FlowingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = ["#ffffff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#ffd6a5"];
    const generated = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(generated);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => {
        // 💫 각 별의 이동 방향과 범위를 랜덤하게 설정
        const moveX = star.x + (Math.random() * 20 - 10); // -10~+10vw
        const moveY = star.y + (Math.random() * 20 - 10); // -10~+10vh

        return (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, x: `${star.x}vw`, y: `${star.y}vh` }}
            animate={{
              opacity: [0.3, 1, 0.6, 0.9, 0.3],
              x: [`${star.x}vw`, `${moveX}vw`, `${star.x}vw`],
              y: [`${star.y}vh`, `${moveY}vh`, `${star.y}vh`],
            }}
            transition={{
              delay: star.delay,
              duration: star.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute rounded-full blur-[1px]"
            style={{
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
            }}
          />
        );
      })}
    </div>
  );
}
