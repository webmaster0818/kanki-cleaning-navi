import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import methods from "@/data/methods.json";

export async function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const method = methods.find((m) => m.slug === slug);
  if (!method) return {};
  return {
    title: method.title,
    description: method.description,
  };
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = methods.find((m) => m.slug === slug);
  if (!method) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "掃除方法ガイド", href: "/method/pro-bunkai/" },
          { label: method.name },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{method.title}</h1>

      <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mb-8">
        <p className="text-gray-700 leading-relaxed">{method.description}</p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "難易度", value: method.difficulty },
          { label: "費用目安", value: method.avgPrice },
          { label: "所要時間", value: method.timeRequired },
          { label: "効果", value: method.effectiveness },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-4 border border-sky-100 text-center">
            <p className="text-xs text-gray-400 mb-1">{item.label}</p>
            <p className="font-bold text-gray-800 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">手順</h2>
        <ol className="space-y-3">
          {method.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-600 text-sm leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
          <h2 className="font-bold text-gray-800 mb-3">メリット</h2>
          <ul className="space-y-2">
            {method.advantages.map((adv, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-accent mt-0.5 flex-shrink-0 font-bold">+</span>
                {adv}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h2 className="font-bold text-gray-800 mb-3">デメリット</h2>
          <ul className="space-y-2">
            {method.disadvantages.map((dis, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-secondary mt-0.5 flex-shrink-0 font-bold">-</span>
                {dis}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Best For */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="font-bold text-gray-800 mb-2">こんな方におすすめ</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{method.bestFor}</p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-white text-center">
        <h3 className="text-xl font-bold mb-3">プロに換気扇クリーニングを依頼する</h3>
        <p className="text-sky-100 mb-6 text-sm">
          自分での清掃が難しい場合はプロにおまかせください。
        </p>
        <Link
          href="/ranking/"
          className="bg-secondary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          おすすめ業者ランキングへ
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {methods.filter((m) => m.slug !== slug).map((m) => (
          <Link
            key={m.slug}
            href={`/method/${m.slug}/`}
            className="text-sm text-primary hover:underline border border-primary/30 px-3 py-1.5 rounded-lg"
          >
            {m.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
