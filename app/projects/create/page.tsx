import { createProject } from '@/lib/actions';

export default function CreateProjectPage() {
    return (
        <div className="max-w-2xl mx-auto p-6 text-white">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h1>

            <form action={createProject} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1 text-gray-200">
                        Título
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Mi Portafolio"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-200">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Aplicación web construida con Next.js y Tailwind CSS..."
                    />
                </div>

                <div>
                    <label htmlFor="technologies" className="block text-sm font-medium mb-1 text-gray-200">
                        Tecnologías (separadas por coma)
                    </label>
                    <input
                        id="technologies"
                        name="technologies"
                        type="text"
                        required
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Next.js, React, TypeScript, Tailwind CSS"
                    />
                </div>

                <div className="flex gap-4 mt-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
                    >
                        Guardar Proyecto
                    </button>
                </div>
            </form>
        </div>
    );
}