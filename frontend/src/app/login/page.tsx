'use client';
import { useState } from 'react';
import { login } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import InputField from '../../components/Inputfield';
import Button from '../../components/button';
// import { useAuth } from '../../context/AuthContext';
import { LoginData } from '../../types/auth';

export default function LoginPage() {
    const router = useRouter();
    // const { setToken } = useAuth();
    const [form, setForm] = useState<LoginData>({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(form);
            //setToken(res.access_token);
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
                <p className="text-gray-500 dark:text-gray-400">Please enter your details to sign in</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <div className="pt-2">
                    <Button type="submit">Sign In</Button>
                </div>
            </form>
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{' '}
                <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                    Create one for free
                </a>
            </p>
        </div>
    );
}
