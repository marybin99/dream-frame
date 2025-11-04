"use client";
import Header from "@/component/Header";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";

export default function DreamMainPage() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-between h-full">
      <Header text="🌌 &nbsp; Dream Frame" />
      <div className="text-lg">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(`" 당신의 꿈을 들려주세요. "`)
              .pauseFor(800)
              .typeString("<br>")
              .typeString(`" 꿈은 잊히지만, 감정은 남아요. "`)
              .pauseFor(1200)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      </div>
      <button
        onClick={() => router.push("/dream")}
        className="p-3 transition-colors duration-300 rounded-sm cursor-pointer mb-15 bg-white/10 hover:bg-black/20 hover:shadow-inner focus:bg-black/20 active:bg-black/20"
      >
        <span className="text-lg">[ 꿈 기록하기 → ]</span>
      </button>
    </div>
  );
}
