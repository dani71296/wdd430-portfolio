import { Project } from "@/lib/projects-db";

async function getOpenSourceProjects(): Promise<Project[]> {
    const res = await fetch("http://localhost:3000/api/projects?type=opensource", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch open source projects");
    return res.json();
}

export default async function OpenSourcePage() {
    const projects = await getOpenSourceProjects();

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Open Source Projects</h1>
            <pre className="bg-slate-900 p-4 rounded text-xs overflow-auto">
                {JSON.stringify(projects, null, 2)}
            </pre>
        </div>
    );
}