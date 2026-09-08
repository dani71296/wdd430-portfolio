export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} Daniel Tudela. All rights reserved.
                </p>
            </div>
        </footer>
    );
}