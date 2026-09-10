import { Project } from "@/lib/projects-db";

async function getProjects(): Promise<Project[]> {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Projects Overview</h1>
            <pre className="bg-slate-900 p-4 rounded text-xs overflow-auto">
                {JSON.stringify(projects, null, 2)}
            </pre>
        </div>
    );
}