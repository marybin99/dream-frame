import FlowingStars from "@/component/FlowingStars";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dream Frame",
	description: "당신의 꿈을 그림으로 기록하는 공간",
	icons: {
		icon: `/dream-frame/favicon/favicon.ico`,
	},
  openGraph: {
    title: "Dream Frame 🌙",
    description: "당신의 꿈을 프레임에 담다. 나만의 꿈 기록 앱",
    url: "https://marybin99.github.io/dream-frame/",
    siteName: "Dream Frame",
    images: [
      {
        url: "https://marybin99.github.io/dream-frame/og-image.png", // ✅ public 폴더 기준
        width: 1200,
        height: 630,
        alt: "Dream Frame Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Frame 🌙",
    description: "당신의 꿈을 프레임에 담다.",
    images: ["https://marybin99.github.io/dream-frame/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="apple-mobile-web-app-title" content="Dream Frame" />
      </head>
      <body className="font-daeam">
        <main
          className="
            relative
            h-[100svh]
            max-w-md mx-auto
            px-4 py-6
            flex flex-col
            overflow-hidden
          "
          style={{
            backgroundImage: `url('/dream-frame/image/df.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100svh",
          }}
        >
          <FlowingStars />
          {/* 검은색 반투명 오버레이 */}
          <div
            className="absolute inset-0 bg-black pointer-events-none opacity-20"
            aria-hidden="true"
          />
          <div className="relative z-10 h-[calc(100svh)]">{children}</div>
        </main>
      </body>
    </html>
  );
}
