import { NextRequest, NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // 1. Obtenemos el parámetro 'id' de la URL
    const { id } = await params;
    const numericId = Number(id);

    // 2. Validación: Si el ID no es un número válido (ej. "abc")
    if (isNaN(numericId)) {
        return NextResponse.json(
            { error: "Invalid ID format. Must be a number." },
            { status: 400 }
        );
    }

    // 3. Buscar el proyecto en la base de datos
    const project = getProjectById(numericId);

    // 4. Validación: Si no se encontró el proyecto con ese ID
    if (!project) {
        return NextResponse.json(
            { error: "Project not found." },
            { status: 404 }
        );
    }

    // 5. Si todo está bien, devolvemos el proyecto
    return NextResponse.json(project);
}