import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー",
  description: "換気扇クリーニングナビのコンテンツポリシーをご確認ください。",
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />
      <h1 className="text-2xl font-bold text-gray-800 mb-8">コンテンツポリシー</h1>

      <div className="bg-white rounded-xl p-8 border border-sky-100">
        <p className="text-gray-500 text-sm mb-6">最終更新日: 2025年1月1日</p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">コンテンツの制作方針</h2>
          <p className="text-gray-600 leading-relaxed">
            換気扇クリーニングナビは、利用者が適切な換気扇クリーニング業者を選択するために必要な
            正確で有用な情報を提供することを目的としています。
            すべてのコンテンツは、実際の調査・取材・口コミデータに基づいて制作されています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">E-E-A-T方針</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            当サイトはGoogleのE-E-A-T（Experience・Expertise・Authoritativeness・Trustworthiness）の原則に基づいてコンテンツを制作しています。
          </p>
          <ul className="space-y-2">
            {[
              { label: "経験（Experience）", desc: "実際のサービス調査・口コミデータを元にコンテンツを制作" },
              { label: "専門性（Expertise）", desc: "ハウスクリーニング業界の知識を持つ担当者が監修" },
              { label: "権威性（Authoritativeness）", desc: "業界内の公的情報・公式データを参照して情報の権威性を担保" },
              { label: "信頼性（Trustworthiness）", desc: "アフィリエイト関係を明示し、中立・客観的な評価を実施" },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary mt-0.5 flex-shrink-0 font-bold">+</span>
                <span><strong>{item.label}：</strong>{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">広告・アフィリエイトの開示</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは広告収入およびアフィリエイト収入を収益源としています。
            掲載業者のリンクには報酬を受け取る可能性のあるアフィリエイトリンクが含まれます。
            ただし、掲載順位・評価内容は独自の評価基準（口コミ・料金・サービス品質等）によって決定されており、
            広告収入の多寡によって順位を操作することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">情報の正確性と更新方針</h2>
          <p className="text-gray-600 leading-relaxed">
            掲載情報は定期的に見直しを行い、料金・サービス内容・口コミ評価等を最新の状態に保つよう努めています。
            ただし、各業者の料金・サービス内容は随時変更される場合があります。
            最新かつ正確な情報は必ず各業者の公式サイトにてご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">口コミ・評価の収集方針</h2>
          <p className="text-gray-600 leading-relaxed">
            口コミ評価は複数の外部レビューサイト・アンケート調査等をもとに集計しています。
            虚偽・誇大なレビューの掲載は行いません。
            業者から評価向上のための対価を受け取ることはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">禁止コンテンツ</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            以下のようなコンテンツは当サイトでは掲載しません。
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>事実と異なる虚偽の情報</li>
            <li>特定業者への不当な誹謗中傷</li>
            <li>利用者を誤解させる恣意的な比較</li>
            <li>バックボタンハイジャッキング等の不正なUX手法</li>
            <li>Googleペナルティ対象となる不正SEO手法</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
