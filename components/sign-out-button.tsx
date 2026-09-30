// components/sign-out-button.tsx
import { signOut } from '@/auth';

export function SignOutButton() {
    return (
        <form
            action={async () => {
                'use server';
                await signOut({ redirectTo: '/' });
            }}
        >
            <button type="submit" className="text-sm font-medium text-red-600 hover:underline">
                Sign Out
            </button>
        </form>
    );
}