'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth'
import { auth } from '@/auth';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters.'),
    description: z.string().min(20, 'Description must be at least 20 characters.'),
    technologies: z.string().min(2, 'Add at least one technology.'),
    type: z.enum(['opensource', 'school']),
    yearCompleted: z.coerce
        .number()
        .int('Year must be a whole number.')
        .gte(2000, 'Year must be 2000 or later.')
        .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
});

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        technologies?: string[];
        type?: string[];
        yearCompleted?: string[];
    };
    message?: string | null;
};

// Devuelve Promise<State> en lugar de Promise<State | void>
export async function createProject(prevState: State, formData: FormData): Promise<State> {
    await requireOwnerSession();
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type') || 'school',
        yearCompleted: formData.get('yearCompleted'),
    };

    const parsed = ProjectFormSchema.safeParse(raw);

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to create project.',
        };
    }

    const { title, description, technologies, type, yearCompleted } = parsed.data;
    const techArray = `{${technologies.split(',').map((t) => t.trim()).join(',')}}`;

    try {
        await sql`
            INSERT INTO projects (title, description, technologies, type, year_completed)
            VALUES (${title}, ${description}, ${techArray}, ${type}, ${yearCompleted})
        `;
    } catch {
        return {
            message: 'Database Error: Failed to create project.',
        };
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: number) {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/projects');
}

export async function updateProject(id: string, formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type') || 'school',
        yearCompleted: formData.get('yearCompleted') || currentYear,
    };

    const parsed = ProjectFormSchema.safeParse(raw);

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to update project.',
        };
    }

    const { title, description, technologies, type, yearCompleted } = parsed.data;
    const techArray = `{${technologies.split(',').map((t) => t.trim()).join(',')}}`;

    try {
        await sql`
            UPDATE projects
            SET title = ${title},
                description = ${description},
                technologies = ${techArray},
                type = ${type},
                year_completed = ${yearCompleted}
            WHERE id = ${Number(id)}
        `;
    } catch {
        return {
            message: 'Database Error: Failed to update project.',
        };
    }

    revalidatePath('/projects');
    redirect('/projects');
}
export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid email or password.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error; // Re-lanza el error para que Next.js maneje las redirecciones correctamente
    }
}
async function requireOwnerSession() {
    const session = await auth();
    if (!session?.user) {
        redirect('/login'); // Redirige al login si no está autenticado
    }
    return session;
}

