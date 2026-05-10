import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import Link from "next/link";
import scenes from "@/data/scenes.json";

export async function generateStaticParams() {
  return scenes.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scene = scenes.find((s) => s.slug === slug);
  if (!scene) return {};
  return {
    title: scene.title,
    description: scene.description,
  };
}

export default async function ScenePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scene = scenes.find((s) => s.slug === slug);
  if (!scene) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "シーン別ガイド" },
          { label: scene.name },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{scene.title}</h1>

      <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 mb-8">
        <p className="text-gray-700 leading-relaxed">{scene.description}</p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "シーズン", value: scene.season },
          { label: "緊急度", value: scene.urgency },
          { label: "推奨方法", value: scene.recommendedMethod },
          { label: "費用目安", value: scene.avgBudget },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-4 border border-sky-100 text-center">
            <p className="text-xs text-gray-400 mb-1">{item.label}</p>
            <p className="font-bold text-gray-800 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Key Points */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">重要ポイント</h2>
        <ul className="space-y-2">
          {scene.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-primary mt-0.5 flex-shrink-0 font-bold">+</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">スケジュール</h2>
        <div className="space-y-4">
          {scene.timeline.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-28 text-xs font-semibold text-primary bg-primary/10 rounded-lg px-2 py-1.5 text-center">
                {item.time}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm text-gray-600">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-accent/5 rounded-xl p-6 border border-accent/20 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">お役立ちヒント</h2>
        <ul className="space-y-2">
          {scene.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-accent mt-0.5 flex-shrink-0 font-bold">+</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">チェックリスト</h2>
        <ul className="space-y-2">
          {scene.checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-4 h-4 rounded border-2 border-primary flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 text-white text-center">
        <h3 className="text-xl font-bold mb-3">プロに換気扇クリーニングを依頼する</h3>
        <p className="text-sky-100 mb-6 text-sm">
          {scene.name}の換気扇クリーニングはプロにおまかせください。
        </p>
        <Link
          href="/ranking/"
          className="bg-secondary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          おすすめ業者ランキングへ
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {scenes.filter((s) => s.slug !== slug).map((s) => (
          <Link
            key={s.slug}
            href={`/scene/${s.slug}/`}
            className="text-sm text-primary hover:underline border border-primary/30 px-3 py-1.5 rounded-lg"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
