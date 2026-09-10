'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <ul className="flex items-center gap-8 text-sm font-medium">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`transition-colors ${isActive
                                    ? "text-sky-400 font-semibold"
                                    : "text-slate-300 hover:text-sky-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}