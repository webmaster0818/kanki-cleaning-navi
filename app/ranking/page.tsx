import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import companies from "@/data/companies.json";

export const metadata: Metadata = {
  title: "換気扇クリーニング業者おすすめランキング2025年版",
  description:
    "換気扇クリーニング業者のおすすめランキング。おそうじ本舗・ダスキン・カジタクなど10社を口コミ・料金・対応エリアで徹底比較。",
};

export default function RankingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "ランキング" }]} />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        換気扇クリーニング業者おすすめランキング2025年版
      </h1>
      <p className="text-gray-500 text-sm mb-2">
        口コミ評価・料金・対応エリア・サービス内容から総合評価
      </p>
      <div className="flex items-center gap-4 mb-8 text-xs text-gray-400">
        <span>更新日: 2025年1月</span>
        <Link href="/ranking/cheap/" className="text-primary hover:underline">
          安い業者ランキングはこちら
        </Link>
      </div>

      <div className="space-y-6">
        {companies.map((company, index) => (
          <div
            key={company.slug}
            className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${
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
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
                  <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full">
                    {company.coverage}
                  </span>
                  {index === 0 && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 font-bold px-2 py-0.5 rounded-full">
                      編集部イチオシ
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mb-3">{company.tagline}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {company.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-sky-50 text-primary border border-sky-200 px-2 py-0.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-sky-50 rounded-lg p-2.5 text-center">
                    <p className="text-xs text-gray-400">料金目安</p>
                    <p className="font-bold text-gray-800 text-sm">{company.price}円〜</p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-2.5 text-center">
                    <p className="text-xs text-gray-400">口コミ評価</p>
                    <p className="font-bold text-yellow-500 text-sm">★ {company.rating}</p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-2.5 text-center">
                    <p className="text-xs text-gray-400">口コミ数</p>
                    <p className="font-bold text-gray-800 text-sm">{company.reviewCount.toLocaleString()}件</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/company/${company.slug}/`}
                    className="flex-1 bg-primary hover:bg-sky-600 text-white text-center font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    詳細・口コミを見る
                  </Link>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex-1 bg-secondary hover:bg-orange-600 text-white text-center font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    公式サイトで見積もり
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-sky-50 rounded-xl p-6 border border-sky-200">
        <h2 className="font-bold text-gray-800 mb-3">ランキングの選定基準</h2>
        <ul className="space-y-1.5 text-sm text-gray-600">
          <li>口コミ評価（複数サイトの集計）</li>
          <li>料金の透明性・リーズナブルさ</li>
          <li>対応エリアの広さ</li>
          <li>サービス内容（分解洗浄・損害保険等）</li>
          <li>カスタマーサービスの質</li>
        </ul>
        <p className="text-xs text-gray-400 mt-4">
          ※当サイトには広告が含まれており、掲載順位・内容は独自評価に基づくものです。
        </p>
      </div>
    </div>
  );
}
