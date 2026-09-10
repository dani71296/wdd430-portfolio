import Link from "next/link";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav className="flex gap-4 p-4 border-b">
                <Link href="/projects">Projects</Link>
                <Link href="/projects/settings">Settings</Link>
            </nav>
            {children}
        </div>
    );
}