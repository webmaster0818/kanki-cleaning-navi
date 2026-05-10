import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "換気扇クリーニングナビの利用規約をご確認ください。",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "利用規約" }]} />
      <h1 className="text-2xl font-bold text-gray-800 mb-8">利用規約</h1>

      <div className="bg-white rounded-xl p-8 border border-sky-100 prose prose-sm max-w-none">
        <p className="text-gray-500 text-sm mb-6">最終更新日: 2025年1月1日</p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第1条（適用）</h2>
          <p className="text-gray-600 leading-relaxed">
            本規約は、換気扇クリーニングナビ（以下「当サイト」）が提供するサービスの利用に関する条件を定めるものです。
            利用者は本規約に同意した上でサービスをご利用ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第2条（免責事項）</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトに掲載する情報は、信頼性の確保に努めておりますが、情報の正確性・完全性・最新性を保証するものではありません。
            掲載情報に基づいて生じた損害について、当サイトは一切の責任を負いません。
            実際のサービス内容・料金等は、各業者の公式サイトにて最新情報をご確認ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第3条（広告・アフィリエイト）</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、広告収入およびアフィリエイト収入によって運営されています。
            掲載業者のリンクには、当サイトが報酬を受け取るアフィリエイトリンクが含まれる場合があります。
            ただし、掲載順位および評価内容は、独自の基準に基づくものであり、広告収入に左右されることはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第4条（著作権）</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトに掲載するテキスト・画像・データ等の著作権は当サイトまたは正当な権利者に帰属します。
            無断転載・複製・改変等は禁止します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第5条（禁止事項）</h2>
          <p className="text-gray-600 leading-relaxed mb-2">利用者は以下の行為を行ってはなりません。</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>当サイトのサービスを不正利用する行為</li>
            <li>当サイトのシステムに過度な負荷をかける行為</li>
            <li>他の利用者や第三者に迷惑をかける行為</li>
            <li>法令または公序良俗に反する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">第6条（規約の変更）</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、必要に応じて本規約を変更する場合があります。
            変更後の規約は当サイトに掲載された時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">第7条（準拠法・管轄裁判所）</h2>
          <p className="text-gray-600 leading-relaxed">
            本規約の解釈および適用は日本法に準拠します。
            本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>
      </div>
    </div>
  );
}
