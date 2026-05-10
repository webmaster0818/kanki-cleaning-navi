import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "換気扇クリーニング安い業者ランキング｜料金比較2025年版",
  description:
    "換気扇クリーニングが安い業者ランキング。料金の安さを重視して比較。くらしのマーケット・ミツモアなど低価格業者を徹底比較。",
};

// Sort by price (ascending), treating range prices by extracting first number
function extractPrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, "").match(/\d+/);
  return match ? parseInt(match[0], 10) : 99999;
}

export default function CheapRankingPage() {
  const sortedCompanies = [...companies].sort(
    (a, b) => extractPrice(a.price) - extractPrice(b.price)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "ランキング", href: "/ranking/" },
          { label: "安い業者ランキング" },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        換気扇クリーニング安い業者ランキング2025年版
      </h1>
      <p className="text-gray-500 text-sm mb-8">料金の安さを重視して比較。コスパ重視の方必見。</p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-orange-700">
          <strong>注意：</strong>料金は目安です。換気扇の種類・汚れ具合・オプションにより変動します。
          必ず事前に見積もりを取ることをおすすめします。
        </p>
      </div>

      <div className="space-y-4">
        {sortedCompanies.map((company, index) => (
          <div
            key={company.slug}
            className="bg-white rounded-xl p-5 border border-sky-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0
                    ? "bg-yellow-400 text-white"
                    : index === 1
                    ? "bg-gray-300 text-white"
                    : index === 2
                    ? "bg-amber-600 text-white"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-bold text-gray-800">{company.name}</h2>
                  {index === 0 && (
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                      最安値
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{company.priceNote}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xl font-bold text-secondary">{company.price}円〜</p>
                <p className="text-xs text-gray-400 mt-0.5">★ {company.rating}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-2">
              <Link
                href={`/company/${company.slug}/`}
                className="flex-1 text-center text-sm text-primary border border-primary py-2 rounded-lg hover:bg-primary/5 transition-colors"
              >
                詳細・口コミを見る
              </Link>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 text-center text-sm bg-secondary text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                公式サイトで見積もり
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/ranking/" className="text-primary hover:underline text-sm">
          総合ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
