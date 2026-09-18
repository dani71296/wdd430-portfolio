export default function Loading() {
    return (
        <main className="animate-pulse space-y-6 p-6">
            <div className="h-8 w-1/3 rounded bg-slate-700" />
            <div className="grid gap-4 md:grid-cols-2">
                <div className="h-40 rounded-xl bg-slate-800" />
                <div className="h-40 rounded-xl bg-slate-800" />
            </div>
        </main>
    );
}