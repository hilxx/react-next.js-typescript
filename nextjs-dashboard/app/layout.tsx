import "@/app/ui/global.css";
import {inter} from "@/app/ui/fonts";
// 루트 레이아웃에 추가하는 모든 UI 요소는 모든 페이지에서 공유됨
// ss
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
