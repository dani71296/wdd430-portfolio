'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';

const initialState: State = { message: null, errors: {} };

export default function CreateProjectPage() {
    const [state, formAction, isPending] = useActionState(createProject, initialState);

    return (
        <div className="max-w-2xl mx-auto p-6 text-white">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h1>

            <form action={formAction} className="flex flex-col gap-4">
                {/* Título */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1 text-gray-200">
                        Título
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        aria-describedby="title-error"
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Mi Portafolio"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.title?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-400">
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Descripción */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-200">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        aria-describedby="description-error"
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Aplicación web construida con Next.js y Tailwind CSS..."
                    />
                    <div id="description-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.description?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-400">
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Tecnologías */}
                <div>
                    <label htmlFor="technologies" className="block text-sm font-medium mb-1 text-gray-200">
                        Tecnologías (separadas por coma)
                    </label>
                    <input
                        id="technologies"
                        name="technologies"
                        type="text"
                        required
                        aria-describedby="technologies-error"
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Next.js, React, TypeScript, Tailwind CSS"
                    />
                    <div id="technologies-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.technologies?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-400">
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Tipo de Proyecto */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-1 text-gray-200">
                        Tipo de Proyecto
                    </label>
                    <select
                        id="type"
                        name="type"
                        defaultValue="school"
                        aria-describedby="type-error"
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="school">Escolar (School)</option>
                        <option value="opensource">Código Abierto (Open Source)</option>
                    </select>
                    <div id="type-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.type?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-400">
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Año Completado (Campo solicitado en las instrucciones de la lección) */}
                <div>
                    <label htmlFor="yearCompleted" className="block text-sm font-medium mb-1 text-gray-200">
                        Año Completado
                    </label>
                    <input
                        id="yearCompleted"
                        name="yearCompleted"
                        type="number"
                        min="2000"
                        max="2099"
                        required
                        aria-describedby="yearCompleted-error"
                        className="w-full border border-slate-700 bg-slate-900 rounded p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. 2024"
                    />
                    <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.yearCompleted?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-400">
                                {error}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Mensaje de error general si falla algo más */}
                {state.message && (
                    <p className="text-sm text-red-400 mt-2">{state.message}</p>
                )}

                <div className="flex gap-4 mt-2">
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? 'Guardando...' : 'Guardar Proyecto'}
                    </button>
                </div>
            </form>
        </div>
    );
}