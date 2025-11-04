"use client";
import { useEffect, useState } from "react";

export default function DreamPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10); // 10ms 후 시작
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-2000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 페이지 내용 */}
      <h1 className="text-2xl font-bold">꿈 기록 페이지</h1>
    </div>
  );
}
