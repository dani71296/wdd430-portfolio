// middleware.ts (raíz del proyecto)
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // Ejecuta el middleware en todas las rutas excepto archivos estáticos e internos de Next.js
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};