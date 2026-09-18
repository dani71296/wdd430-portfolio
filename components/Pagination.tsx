'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-4 mt-6 items-center">
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm hover:bg-slate-700"
                >
                    Anterior
                </Link>
            ) : (
                <span className="px-3 py-1 text-slate-500 text-sm border border-transparent">
                    Anterior
                </span>
            )}

            <span className="text-sm text-slate-400">
                Página {currentPage} de {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm hover:bg-slate-700"
                >
                    Siguiente
                </Link>
            ) : (
                <span className="px-3 py-1 text-slate-500 text-sm border border-transparent">
                    Siguiente
                </span>
            )}
        </div>
    );
}