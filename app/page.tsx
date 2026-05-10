import Link from "next/link";
import companies from "@/data/companies.json";
import types from "@/data/types.json";
import scenes from "@/data/scenes.json";

export default function HomePage() {
  const topCompanies = companies.slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sky-200 text-sm font-medium mb-3 tracking-widest uppercase">
            換気扇クリーニング専門ナビ
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            換気扇の油汚れ、<br className="md:hidden" />
            プロにおまかせ。
          </h1>
          <p className="text-sky-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            全国対応のハウスクリーニング業者を比較。口コミ・料金・サービス内容から
            あなたにぴったりの換気扇クリーニング業者を見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking/"
              className="bg-secondary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              おすすめ業者ランキングを見る
            </Link>
            <Link
              href="/cost/price/"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/30"
            >
              料金相場を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10社", label: "掲載業者数" },
              { value: "25,000+", label: "総口コミ数" },
              { value: "年1回", label: "推奨クリーニング頻度" },
              { value: "8,800円〜", label: "クリーニング料金目安" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Ranking Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">おすすめ業者 TOP5</h2>
              <p className="text-gray-500 text-sm mt-1">口コミ評価・料金・対応エリアで総合評価</p>
            </div>
            <Link href="/ranking/" className="text-primary hover:underline text-sm font-medium">
              全ランキングを見る
            </Link>
          </div>
          <div className="space-y-4">
            {topCompanies.map((company, index) => (
              <Link
                key={company.slug}
                href={`/company/${company.slug}/`}
                className="block bg-white rounded-xl p-5 shadow-sm border border-sky-100 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full">
                        {company.coverage}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5 truncate">{company.tagline}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-bold text-gray-800">{company.price}円〜</p>
                    <div className="flex items-center gap-1 justify-end mt-0.5">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-xs font-semibold text-gray-700">{company.rating}</span>
                      <span className="text-xs text-gray-400">({company.reviewCount.toLocaleString()}件)</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ranking/"
              className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-sky-600 transition-colors"
            >
              全10社のランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Fan Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">換気扇の種類から選ぶ</h2>
          <p className="text-gray-500 text-sm mb-8">換気扇の種類によってクリーニング方法や費用が異なります</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {types.map((type) => (
              <Link
                key={type.slug}
                href={`/type/${type.slug}/`}
                className="bg-sky-50 hover:bg-sky-100 rounded-xl p-5 border border-sky-100 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M12 3 L12 12 L17 12" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {type.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{type.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                      <span>清掃頻度: {type.cleaningFrequency}</span>
                      <span>料金: {type.avgPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scene guides */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">シーン別ガイド</h2>
          <p className="text-gray-500 text-sm mb-8">状況に合わせた換気扇クリーニングの方法を解説</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenes.map((scene) => (
              <Link
                key={scene.slug}
                href={`/scene/${scene.slug}/`}
                className="bg-white rounded-xl p-6 border border-sky-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">
                  {scene.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{scene.description}</p>
                <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium">
                  詳しく見る
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            今すぐプロに換気扇クリーニングを依頼しよう
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            1年以上放置した換気扇は火災リスクも。今すぐプロに相談を。
          </p>
          <Link
            href="/ranking/"
            className="bg-white text-secondary font-bold px-10 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            おすすめ業者ランキングを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
