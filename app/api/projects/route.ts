import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export async function GET(request: NextRequest) {
    // Extraemos la URL de la petición para leer los query parameters
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    // Obtenemos los proyectos (filtrados si viene 'type', o todos si no viene)
    const data = getProjects(type);

    // Retornamos la respuesta en formato JSON
    return NextResponse.json(data);
}