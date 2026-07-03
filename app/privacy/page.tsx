import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "換気扇クリーニングナビのプライバシーポリシーをご確認ください。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <h1 className="text-2xl font-bold text-gray-800 mb-8">プライバシーポリシー</h1>

      <div className="bg-white rounded-xl p-8 border border-sky-100">
        <p className="text-gray-500 text-sm mb-6">最終更新日: 2025年1月1日</p>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">個人情報の収集について</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイト（換気扇クリーニングナビ）では、サービスの提供に際して個人情報を収集することがあります。
            収集する情報は、お問い合わせフォームに入力いただいたメールアドレス等に限ります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">アクセス解析ツールについて</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトでは、Googleアナリティクスを使用してアクセス情報を収集・分析しています。
            Googleアナリティクスはクッキーを使用しており、収集されたデータはGoogleのプライバシーポリシーに基づいて管理されます。
            ブラウザの設定でクッキーを無効化することでデータ収集を拒否できます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">広告クッキーについて</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは第三者配信の広告サービスを利用しており、広告配信のためにクッキーが使用される場合があります。
            これらのクッキーにより、利用者が当サイトや他のサイトを訪問したときに、利用者の行動に応じた広告が表示される場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">個人情報の利用目的</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            収集した個人情報は以下の目的のみに使用します。
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>お問い合わせへの回答</li>
            <li>サービス改善のための分析</li>
            <li>法令に基づく対応</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">個人情報の第三者提供</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、法令に基づく場合を除き、収集した個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-3">個人情報の管理</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトは、収集した個人情報の漏洩・紛失・改ざん防止のために適切な安全管理措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">お問い合わせ</h2>
          <p className="text-gray-600 leading-relaxed">
            個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
