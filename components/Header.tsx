import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="w-full border-b border-slate-800/80 bg-[#0a0f1c]/90 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors"
                >
                    Daniel<span className="text-sky-400">.</span>
                </Link>

                <nav>
                    <NavLinks />
                </nav>
            </div>
        </header>
    );
}