export const dynamic = 'force-dynamic';

import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

export default async function ProjectsPage(props: {
    searchParams?: Promise<{ query?: string; page?: string }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    // Consulta la BD aplicando el filtro y la página actual
    const projects = await fetchFilteredProjects(query, currentPage);
    const totalPages = await fetchProjectsPages(query);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Proyectos</h1>

            {/* Barra de Búsqueda */}
            <ProjectSearch />

            {/* Resultado de Proyectos */}
            <pre className="bg-slate-900 p-4 rounded text-xs overflow-auto mb-4">
                {JSON.stringify(projects, null, 2)}
            </pre>

            {/* Controles de Paginación */}
            <Pagination totalPages={totalPages} />
        </div>
    );
}