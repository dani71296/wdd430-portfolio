'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(10),
    technologies: z.string().min(2),
    type: z.enum(['opensource', 'school']),
});

export async function createProject(formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type') || 'school',
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error('Invalid project input.');
    }

    const { title, description, technologies, type } = parsed.data;
    // Convertimos la cadena de tecnologías en un arreglo/formato PostgreSQL si es necesario
    const techArray = `{${technologies.split(',').map(t => t.trim()).join(',')}}`;

    await sql`
    INSERT INTO projects (title, description, technologies, type)
    VALUES (${title}, ${description}, ${techArray}, ${type})
  `;

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type') || 'school',
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error('Invalid project input.');
    }

    const { title, description, technologies, type } = parsed.data;
    const techArray = `{${technologies.split(',').map(t => t.trim()).join(',')}}`;

    await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, technologies = ${techArray}, type = ${type}
    WHERE id = ${Number(id)}
  `;

    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: number) {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/projects');
}