// components/login-form.tsx
'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions'; // Ajusta la ruta si tu actions.ts está en app/lib/actions

export function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <form action={formAction} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border p-2 rounded mt-1"
                />
            </div>
            <div>
                <label htmlFor="password font-medium" className="block text-sm">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    minLength={6}
                    required
                    className="w-full border p-2 rounded mt-1"
                />
            </div>
            <button
                aria-disabled={isPending}
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {isPending ? 'Signing in...' : 'Sign In'}
            </button>
            {errorMessage && <p className="text-red-500 text-sm" role="alert">{errorMessage}</p>}
        </form>
    );
}