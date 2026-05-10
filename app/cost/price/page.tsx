import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "換気扇クリーニングの料金相場2025年版｜費用の目安と内訳",
  description:
    "換気扇クリーニングの料金相場を詳しく解説。シロッコファン・プロペラファン・レンジフードの種類別価格、追加費用、節約方法まで徹底解説。",
};

const priceData = [
  { type: "シロッコファン（単体）", low: "7,700", high: "12,000", avg: "9,000" },
  { type: "プロペラファン（単体）", low: "5,500", high: "9,900", avg: "7,000" },
  { type: "ターボファン（単体）", low: "12,000", high: "20,000", avg: "15,000" },
  { type: "レンジフード（セット）", low: "10,000", high: "20,000", avg: "14,000" },
  { type: "レンジフード＋周辺", low: "15,000", high: "30,000", avg: "20,000" },
];

const extraCosts = [
  { item: "分解洗浄オプション", price: "+1,000〜3,000円" },
  { item: "ダクト内部清掃", price: "+3,000〜10,000円" },
  { item: "高圧洗浄", price: "+1,000〜2,000円" },
  { item: "即日・当日対応", price: "+1,000〜5,000円" },
  { item: "遠方交通費", price: "+0〜3,000円" },
];

export default function PricePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "料金・費用", href: "/cost/price/" },
          { label: "換気扇クリーニングの料金相場" },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        換気扇クリーニングの料金相場2025年版
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        最終更新: 2025年1月 | 全国10社の料金をもとに算出
      </p>

      {/* Price Table */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm mb-8 overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <h2 className="text-white font-bold text-lg">換気扇の種類別料金一覧</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="text-left px-6 py-3 text-gray-600 font-semibold">種類</th>
                <th className="text-center px-4 py-3 text-gray-600 font-semibold">最安値</th>
                <th className="text-center px-4 py-3 text-gray-600 font-semibold">最高値</th>
                <th className="text-center px-4 py-3 text-primary font-bold">平均相場</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-50">
              {priceData.map((row) => (
                <tr key={row.type} className="hover:bg-sky-50/50">
                  <td className="px-6 py-4 font-medium text-gray-700">{row.type}</td>
                  <td className="px-4 py-4 text-center text-gray-500">{row.low}円〜</td>
                  <td className="px-4 py-4 text-center text-gray-500">〜{row.high}円</td>
                  <td className="px-4 py-4 text-center font-bold text-primary">{row.avg}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 bg-sky-50/50">
          <p className="text-xs text-gray-400">※料金はすべて税込の目安です。業者・地域・汚れ具合によって変動します。</p>
        </div>
      </div>

      {/* Additional Costs */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">追加費用の目安</h2>
        <div className="space-y-2">
          {extraCosts.map((cost) => (
            <div key={cost.item} className="flex items-center justify-between py-2 border-b border-sky-50 last:border-0">
              <span className="text-sm text-gray-600">{cost.item}</span>
              <span className="text-sm font-semibold text-secondary">{cost.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips to Save Money */}
      <div className="bg-accent/5 rounded-xl p-6 border border-accent/20 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">料金を安くする方法</h2>
        <ul className="space-y-3">
          {[
            "複数箇所まとめて依頼すると割引になることが多い（エアコン・浴室等）",
            "閑散期（2〜5月）は繁忙期より安くなる場合がある",
            "定期プランを契約すると1回あたりの料金が割安に",
            "比較サイトで複数業者から見積もりを取って最安値を探す",
            "キャンペーン・クーポンを活用する",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-accent mt-0.5 flex-shrink-0 font-bold">+</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">よくある質問</h2>
        <div className="space-y-4">
          {[
            {
              q: "換気扇クリーニングの相場はいくらですか？",
              a: "シロッコファン単体で7,700〜12,000円程度が相場です。レンジフードのセットだと10,000〜20,000円程度になります。",
            },
            {
              q: "安すぎる業者は大丈夫ですか？",
              a: "5,000円以下の極端に安い業者は、簡易清掃のみで分解洗浄が含まれていない場合があります。作業内容を事前に確認しましょう。",
            },
            {
              q: "見積もりは無料ですか？",
              a: "ほとんどの業者は現地見積もりまたはオンライン見積もりが無料です。訪問見積もりの費用が発生するかは事前に確認しましょう。",
            },
          ].map((faq, i) => (
            <div key={i}>
              <p className="font-semibold text-gray-800 text-sm mb-1">Q. {faq.q}</p>
              <p className="text-gray-600 text-sm bg-sky-50 rounded-lg p-3">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/ranking/"
          className="flex-1 bg-primary text-white text-center font-bold py-3 rounded-xl hover:bg-sky-600 transition-colors"
        >
          おすすめ業者で無料見積もりを取る
        </Link>
        <Link
          href="/cost/diy-vs-pro/"
          className="flex-1 bg-white text-primary text-center font-bold py-3 rounded-xl border border-primary hover:bg-sky-50 transition-colors"
        >
          DIYとプロの費用比較
        </Link>
      </div>
    </div>
  );
}
