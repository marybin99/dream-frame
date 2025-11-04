"use client";
import Header from "@/component/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useArtStore } from "@/store/artStore";
import FlowingLoader from "@/component/FlowingLoader";

export default function DreamPage() {
  const [visible, setVisible] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("꿈 내용을 입력해주세요");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          prompt
        )}&langpair=ko|en`
      );

      if (!response.ok) throw new Error("번역 실패");

      const data = await response.json();
      const translated = data.responseData.translatedText;

      const encodedPrompt = encodeURIComponent(
        translated + " like ghibli style art"
      );
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?t=${Date.now()}`;

      await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      useArtStore.getState().setArt(imageUrl, prompt);
    } catch (err) {
      setError("아트 생성에 실패했어요. 다시 시도해주세요.");
      setLoading(false);
      console.error("Generation error:", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-between h-full transition-opacity duration-2000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {loading ? (
        <FlowingLoader onComplete={() => router.push("/dream/result")} />
      ) : (
        <>
          <Header text="✍️ &nbsp; 오늘 당신의 꿈을 기록해주세요" />
          <div className="relative w-full h-2/5">
            <textarea
              className="w-full h-full p-4 text-white border rounded-md resize-none bg-white/10 border-white/30 placeholder-white/80 focus:outline-none"
              placeholder="여기에 당신의 꿈을 기록해보세요..."
              name="dream-text-area"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.ctrlKey) {
                  handleGenerate();
                }
              }}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>
          <button
            className={`p-3 transition duration-200 rounded-sm cursor-pointer mb-15 bg-white/10 
            hover:bg-black/20 hover:shadow-inner focus:bg-black/20 active:bg-black/20
            disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={handleGenerate}
            disabled={!prompt.trim()}
          >
            <span className="text-lg">[ 아트 생성하기 → ]</span>
          </button>
        </>
      )}
    </div>
  );
}
