import { updateProject } from '@/lib/actions';

// Ajusta este import según dónde tengas la función para consultar un proyecto por ID
// por ejemplo desde '@/lib/projects-db'
import { getProjectById } from '@/lib/projects-db';

export default async function EditProjectPage(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const id = params.id;

    // Obtenemos los datos actuales del proyecto para rellenar el formulario
    const project = await getProjectById(Number(id));

    if (!project) {
        return <div className="p-6">Proyecto no encontrado.</div>;
    }

    // Vinculamos el ID a la Server Action updateProject usando .bind
    const updateProjectWithId = updateProject.bind(null, id);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Editar Proyecto</h1>

            <form action={updateProjectWithId} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Título
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={project.title}
                        required
                        className="w-full border rounded p-2 text-black"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue={project.description}
                        required
                        rows={4}
                        className="w-full border rounded p-2 text-black"
                    />
                </div>

                <div>
                    <label htmlFor="technologies" className="block text-sm font-medium mb-1">
                        Tecnologías (separadas por coma)
                    </label>
                    <input
                        id="technologies"
                        name="technologies"
                        type="text"
                        defaultValue={
                            Array.isArray(project.technologies)
                                ? project.technologies.join(', ')
                                : project.technologies
                        }
                        required
                        className="w-full border rounded p-2 text-black"
                    />
                </div>

                <div className="flex gap-4 mt-2">
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                        Actualizar Proyecto
                    </button>
                </div>
            </form>
        </div>
    );
}