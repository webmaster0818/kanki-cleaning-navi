import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2"/>
              <path d="M10 3 L10 10 L14 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
            換気扇クリーニングナビ
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/ranking/" className="text-gray-600 hover:text-primary transition-colors">
            ランキング
          </Link>
          <Link href="/type/sirocco-fan/" className="text-gray-600 hover:text-primary transition-colors">
            換気扇の種類
          </Link>
          <Link href="/method/pro-bunkai/" className="text-gray-600 hover:text-primary transition-colors">
            掃除方法
          </Link>
          <Link href="/cost/price/" className="text-gray-600 hover:text-primary transition-colors">
            料金相場
          </Link>
          <Link
            href="/ranking/"
            className="bg-secondary text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors"
          >
            業者を探す
          </Link>
        </nav>
        <button className="md:hidden p-2 text-gray-600">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
