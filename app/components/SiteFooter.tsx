import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2"/>
                  <path d="M10 3 L10 10 L14 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">換気扇クリーニングナビ</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              換気扇クリーニングの業者選びをサポートする情報サイトです。
              口コミ・料金・サービス内容を比較して、最適な業者をお探しください。
            </p>
            <p className="text-xs text-gray-500 mt-4">
              当サイトには広告が含まれています。掲載情報は取材時点のものであり、最新情報は各業者の公式サイトにてご確認ください。
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">業者・ランキング</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white transition-colors">おすすめ業者ランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-white transition-colors">安い業者ランキング</Link></li>
              <li><Link href="/company/osoujihonpo/" className="hover:text-white transition-colors">おそうじ本舗</Link></li>
              <li><Link href="/company/duskin/" className="hover:text-white transition-colors">ダスキン</Link></li>
              <li><Link href="/company/kajitaku/" className="hover:text-white transition-colors">カジタク</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">お役立ち情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cost/price/" className="hover:text-white transition-colors">換気扇クリーニングの料金</Link></li>
              <li><Link href="/cost/diy-vs-pro/" className="hover:text-white transition-colors">DIYvsプロ比較</Link></li>
              <li><Link href="/type/sirocco-fan/" className="hover:text-white transition-colors">換気扇の種類</Link></li>
              <li><Link href="/method/pro-bunkai/" className="hover:text-white transition-colors">掃除方法ガイド</Link></li>
              <li><Link href="/scene/nenmatsu-oosouji/" className="hover:text-white transition-colors">年末大掃除</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2025 換気扇クリーニングナビ. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link>
            <Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-white transition-colors">コンテンツポリシー</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
