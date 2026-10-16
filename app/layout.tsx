import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "換気扇クリーニングナビ｜プロ業者の比較・口コミ・料金相場",
    template: "%s｜換気扇クリーニングナビ",
  },
  description:
    "換気扇クリーニング業者の比較サイトです。おすすめ業者のランキング・口コミ・料金相場に加え、分解洗浄からご自身で行う掃除の方法まで、換気扇の清掃に関する情報を解説しています。",
  keywords: ["換気扇クリーニング", "換気扇掃除", "レンジフード洗浄", "ハウスクリーニング", "業者比較"],
  metadataBase: new URL("https://kanki-cleaning.com"),
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "換気扇クリーニングナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-bg">
        <SiteHeader />
        <main className="flex-1">{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"換気扇クリーニングナビ\",\"url\":\"https://kanki-cleaning.com/\",\"logo\":\"https://kanki-cleaning.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://kanki-cleaning.com/about/\"]}" }}
        />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
