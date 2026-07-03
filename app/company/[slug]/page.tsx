import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import companies from "@/data/companies.json";

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の換気扇クリーニング口コミ・評判・料金`,
    description: `${company.name}の換気扇クリーニングを徹底レビュー。料金${company.price}円〜、評価${company.rating}点。実際の口コミ${company.reviewCount.toLocaleString()}件をもとに特徴・メリット・デメリットを解説。`,
    alternates: { canonical: `/company/${slug}/` },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const rank = companies.findIndex((c) => c.slug === slug) + 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "業者一覧", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      {/* Company Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-primary">
            {rank}位
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
            <p className="text-gray-500 mt-1">{company.tagline}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {company.features.map((f) => (
                <span
                  key={f}
                  className="text-xs bg-sky-50 text-primary border border-sky-200 px-2.5 py-1 rounded-full font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-sky-50">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">料金目安</p>
            <p className="text-lg font-bold text-gray-800">{company.price}円〜</p>
            <p className="text-xs text-gray-400">{company.priceNote}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">作業時間</p>
            <p className="text-lg font-bold text-gray-800">{company.time}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">口コミ評価</p>
            <p className="text-lg font-bold text-yellow-500">★ {company.rating}</p>
            <p className="text-xs text-gray-400">{company.reviewCount.toLocaleString()}件</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">対応エリア</p>
            <p className="text-lg font-bold text-gray-800">{company.coverage}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 bg-secondary hover:bg-orange-600 text-white text-center font-bold py-3 rounded-xl transition-colors"
          >
            {company.name}の公式サイトで見積もりを取る
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">{company.name}の特徴</h2>
        <p className="text-gray-600 leading-relaxed">{company.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold text-accent mb-2">メリット</h3>
            <ul className="space-y-1.5">
              {company.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-accent mt-0.5 flex-shrink-0">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-secondary mb-2">デメリット</h3>
            <ul className="space-y-1.5">
              {company.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-secondary mt-0.5 flex-shrink-0">-</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-5">実際の口コミ・評判</h2>
        <div className="space-y-4">
          {company.reviews.map((review, i) => (
            <div key={i} className="bg-sky-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{review.author}</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={`text-sm ${j < review.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">基本情報</h2>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-sky-50">
            <tr>
              <td className="py-2.5 pr-4 text-gray-400 w-32">会社名</td>
              <td className="py-2.5 text-gray-700 font-medium">{company.name}</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 text-gray-400">設立</td>
              <td className="py-2.5 text-gray-700">{company.founded}</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 text-gray-400">対応エリア</td>
              <td className="py-2.5 text-gray-700">{company.coverage}</td>
            </tr>
            <tr>
              <td className="py-2.5 pr-4 text-gray-400">料金目安</td>
              <td className="py-2.5 text-gray-700">{company.price}円〜（{company.priceNote}）</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-4">
          ※掲載料金は目安です。現地調査・作業内容によって変動する場合があります。最新情報は公式サイトをご確認ください。
        </p>
      </div>

      <div className="text-center">
        <Link href="/ranking/" className="text-primary hover:underline font-medium">
          他の業者と比較する
        </Link>
      </div>
    </div>
  );
}
