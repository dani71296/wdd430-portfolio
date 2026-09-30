// auth.config.ts (raíz del proyecto)
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login', // usa tu propia página de inicio de sesión
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            // Protege todas las rutas debajo de /dashboard
            const isProtected = nextUrl.pathname.startsWith('/dashboard');

            if (isProtected) {
                if (isLoggedIn) return true;
                return false; // redirige a /login
            }

            // Redirige a usuarios ya autenticados fuera de la página de login
            if (isLoggedIn && nextUrl.pathname === '/login') {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }

            return true;
        },
    },
    providers: [], // los proveedores se añaden en auth.ts
} satisfies NextAuthConfig;