"use client";
import Image from "next/image";
import { useArtStore } from "@/store/artStore";
import Header from "@/component/Header";
import { motion } from "framer-motion";

export default function DreamResultPage() {
  const { artUrl, prompt } = useArtStore();

  const handleDownload = async () => {
    try {
      const response = await fetch(artUrl!);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "dream-art.png"; // 저장 파일명
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("이미지 저장 실패:", err);
      alert("이미지를 저장하는 중 문제가 발생했어요 🥲");
    }
  };

  return (
    <div>
      <Header text={["✨ 당신의 꿈 ✨", <br key="linebreak" />, `${prompt}`]} />
      <Image
        src={artUrl ?? "/image/placeholder.png"}
        alt="꿈 이미지"
        width={512}
        height={512}
        className="py-5"
      />
      <p className="text-center">&quot; 이건 당신의 꿈이에요 &quot;</p>
      <div className="flex justify-around mt-6 space-x-4">
        <GlowButton onClick={() => handleDownload()}>이미지 저장</GlowButton>
        <GlowButton
          onClick={() => {
            void (navigator.share
              ? navigator.share({
                  title: "내 꿈의 장면",
                  url: window.location.href,
                })
              : alert("공유 기능은 모바일 또는 지원 브라우저에서 가능합니다!"));
          }}
        >
          공유하기
        </GlowButton>
        <GlowButton
          onClick={() => {
            useArtStore.getState().clearArt();
            window.location.href = "/";
          }}
        >
          처음으로
        </GlowButton>
      </div>
    </div>
  );
}

function GlowButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255,255,255,0.4)",
        textShadow: "0 0 8px rgba(255,255,255,0.6)",
      }}
      whileTap={{ scale: 0.97 }}
      className="px-3 py-2 font-medium text-white transition-all duration-200 cursor-pointer rounded-xl bg-white/10 hover:bg-white/20"
    >
      {children}
    </motion.button>
  );
}
