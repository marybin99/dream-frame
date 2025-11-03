import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans bg-gray-50">
        <main
          className="
            min-h-[calc(100svh)]
            max-w-sm mx-auto
            px-4 py-6
            bg-white
            flex flex-col
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
