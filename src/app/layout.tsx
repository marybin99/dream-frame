import FlowingStars from "@/component/FlowingStars";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
            backgroundImage: "url('/image/df.jpg')",
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
          <div className="relative z-10 h-[calc(100svh)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
