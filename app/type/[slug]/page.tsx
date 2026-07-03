import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import types from "@/data/types.json";

export async function generateStaticParams() {
  return types.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = types.find((t) => t.slug === slug);
  if (!type) return {};
  return {
    title: type.title,
    description: type.description,
    alternates: { canonical: `/type/${slug}/` },
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = types.find((t) => t.slug === slug);
  if (!type) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "換気扇の種類", href: "/type/sirocco-fan/" },
          { label: type.name },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{type.title}</h1>

      <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mb-8">
        <p className="text-gray-700 leading-relaxed">{type.description}</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "難易度", value: type.difficulty },
          { label: "清掃頻度", value: type.cleaningFrequency },
          { label: "料金目安", value: type.avgPrice },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-4 border border-sky-100 text-center">
            <p className="text-xs text-gray-400 mb-1">{item.label}</p>
            <p className="font-bold text-gray-800 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">{type.name}の特徴</h2>
        <p className="text-gray-600 leading-relaxed">{type.features}</p>
      </div>

      {/* Cleaning Steps */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">クリーニング手順</h2>
        <ol className="space-y-3">
          {type.cleaningSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-600 text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Tips */}
      <div className="bg-accent/5 rounded-xl p-6 border border-accent/20 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">お役立ちヒント</h2>
        <ul className="space-y-2">
          {type.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-accent mt-0.5 flex-shrink-0 font-bold">+</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Warnings */}
      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">注意事項</h2>
        <ul className="space-y-2">
          {type.warnings.map((warning, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-secondary mt-0.5 flex-shrink-0 font-bold">!</span>
              {warning}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-white text-center">
        <h3 className="text-xl font-bold mb-3">{type.name}のクリーニングはプロに相談</h3>
        <p className="text-sky-100 mb-6 text-sm">
          DIYが難しい場合や頑固な汚れはプロへの依頼がおすすめです。
        </p>
        <Link
          href="/ranking/"
          className="bg-secondary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          おすすめ業者を見る
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {types.filter((t) => t.slug !== slug).map((t) => (
          <Link
            key={t.slug}
            href={`/type/${t.slug}/`}
            className="text-sm text-primary hover:underline border border-primary/30 px-3 py-1.5 rounded-lg"
          >
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
