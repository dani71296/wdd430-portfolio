export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import { deleteProject } from '@/lib/actions';
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
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Proyectos</h1>
                <Link
                    href="/projects/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                    + Crear Proyecto
                </Link>
            </div>

            {/* Barra de Búsqueda */}
            <div className="mb-6">
                <ProjectSearch />
            </div>

            {/* Resultado de Proyectos */}
            <div className="grid gap-4 mb-6">
                {projects.length === 0 ? (
                    <p className="text-gray-500 italic">No se encontraron proyectos.</p>
                ) : (
                        projects.map((project) => {
                        // Vinculamos la Server Action de eliminar con el ID del proyecto
                        const deleteProjectWithId = deleteProject.bind(null, project.id);

                        return (
                            <div
                                key={project.id}
                                className="border rounded-lg p-4 flex justify-between items-center shadow-sm bg-slate-900 border-slate-800"
                            >
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-300 text-sm">
                                        {project.description}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        <span className="font-medium text-gray-200">Tecnologías:</span>{' '}
                                        {Array.isArray(project.technologies)
                                            ? project.technologies.join(', ')
                                            : project.technologies}
                                    </p>
                                </div>

                                <div className="flex gap-2 items-center ml-4">
                                    <Link
                                        href={`/projects/${project.id}/edit`}
                                        className="bg-yellow-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-yellow-700 transition-colors"
                                    >
                                        Editar
                                    </Link>

                                    <form action={deleteProjectWithId}>
                                        <button
                                            type="submit"
                                            className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-red-700 transition-colors"
                                        >
                                            Eliminar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Controles de Paginación */}
            <Pagination totalPages={totalPages} />
        </div>
    );
}