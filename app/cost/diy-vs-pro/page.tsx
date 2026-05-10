import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "換気扇クリーニングDIYvsプロ比較｜費用・効果・時間を徹底比較",
  description:
    "換気扇クリーニングをDIYでやるかプロに頼むか徹底比較。費用・洗浄効果・時間・リスクの観点から最適な選択をサポートします。",
};

export default function DiyVsProPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "料金・費用", href: "/cost/price/" },
          { label: "DIYvsプロ比較" },
        ]}
      />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        換気扇クリーニングDIYvsプロ｜どっちがおすすめ？
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        費用・洗浄効果・時間・リスクを徹底比較。あなたに最適な方法をお選びください。
      </p>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm mb-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="text-left px-6 py-4 text-gray-600 font-semibold">比較項目</th>
                <th className="text-center px-6 py-4 text-gray-600 font-bold">DIY</th>
                <th className="text-center px-6 py-4 text-primary font-bold">プロ依頼</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-50">
              {[
                { item: "費用", diy: "300〜1,500円", pro: "7,700〜20,000円" },
                { item: "洗浄効果", diy: "軽〜中程度の汚れ", pro: "頑固な油汚れも完全除去" },
                { item: "作業時間", diy: "1〜3時間", pro: "60〜120分（立ち会いのみ）" },
                { item: "仕上がり品質", diy: "中程度", pro: "新品同様" },
                { item: "分解洗浄", diy: "機種によって困難", pro: "標準対応" },
                { item: "ダクト清掃", diy: "基本的に不可", pro: "対応可" },
                { item: "破損リスク", diy: "あり", pro: "損害保険加入業者あり" },
                { item: "再作業のリスク", diy: "高い", pro: "品質保証業者あり" },
                { item: "火災リスク低減", diy: "部分的", pro: "完全対応" },
              ].map((row) => (
                <tr key={row.item} className="hover:bg-sky-50/50">
                  <td className="px-6 py-3 font-medium text-gray-700">{row.item}</td>
                  <td className="px-6 py-3 text-center text-gray-500">{row.diy}</td>
                  <td className="px-6 py-3 text-center font-semibold text-primary">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DIY Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-sky-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">DIYがおすすめなケース</h2>
          <ul className="space-y-2">
            {[
              "汚れが軽度で比較的新しい換気扇",
              "費用を最小限に抑えたい",
              "プロペラファンなどシンプルな構造",
              "定期的に自分でメンテナンスしている",
              "作業時間が確保できる",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-accent mt-0.5 flex-shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-sky-50 rounded-lg">
            <p className="text-xs text-gray-500">費用目安: 300〜1,500円</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-sky-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">プロ依頼がおすすめなケース</h2>
          <ul className="space-y-2">
            {[
              "1年以上放置して汚れがひどい",
              "シロッコファンなど分解が複雑な機種",
              "賃貸退去前の原状回復",
              "年末大掃除で一気にきれいにしたい",
              "火災・臭い・排気不良が気になる",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary mt-0.5 flex-shrink-0">+</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 bg-sky-50 rounded-lg">
            <p className="text-xs text-gray-500">費用目安: 7,700〜20,000円</p>
          </div>
        </div>
      </div>

      {/* Hybrid Approach */}
      <div className="bg-accent/5 rounded-xl p-6 border border-accent/20 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">賢い組み合わせ戦略</h2>
        <p className="text-gray-600 text-sm mb-4">
          最もコストパフォーマンスが高いのは「月次DIY＋年1回プロ」の組み合わせです。
        </p>
        <ul className="space-y-2">
          {[
            "毎月：フィルターの水洗い（DIY・費用ほぼゼロ）",
            "3ヶ月ごと：カバー・本体表面の拭き掃除（DIY）",
            "年1回：プロによる分解洗浄でリセット",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-accent mt-0.5 flex-shrink-0 font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Cost Calculation */}
      <div className="bg-white rounded-xl p-6 border border-sky-100 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">年間コスト比較</h2>
        <div className="space-y-3">
          {[
            { method: "完全DIY（年4回）", cost: "約2,000〜6,000円", note: "効果は限定的" },
            { method: "プロのみ（年1回）", cost: "約8,000〜15,000円", note: "汚れが蓄積しやすい" },
            { method: "推奨：DIY月次＋プロ年1回", cost: "約9,000〜16,000円", note: "最もコスパが高い" },
          ].map((item) => (
            <div key={item.method} className="flex items-center justify-between py-2.5 border-b border-sky-50 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-700">{item.method}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
              <p className="text-sm font-bold text-primary">{item.cost}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/ranking/"
          className="flex-1 bg-secondary text-white text-center font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors"
        >
          プロに依頼する業者を探す
        </Link>
        <Link
          href="/method/diy-cleaning/"
          className="flex-1 bg-white text-primary text-center font-bold py-3 rounded-xl border border-primary hover:bg-sky-50 transition-colors"
        >
          DIY掃除方法を見る
        </Link>
      </div>
    </div>
  );
}
