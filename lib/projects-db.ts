import { sql } from '@vercel/postgres';

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const { rows } = await sql<Project>`
      SELECT * FROM projects
      WHERE 
        title ILIKE ${`%${query}%`} OR 
        description ILIKE ${`%${query}%`}
      ORDER BY id
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
        return rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects.');
    }
}

export async function fetchProjectsPages(query: string): Promise<number> {
    try {
        const { rows } = await sql`
      SELECT COUNT(*) 
      FROM projects
      WHERE 
        title ILIKE ${`%${query}%`} OR 
        description ILIKE ${`%${query}%`}
    `;

        const totalPages = Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total pages.');
    }
}

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
        return rows;
    }
    const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
    return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
    const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
    return rows[0] ?? null;
}