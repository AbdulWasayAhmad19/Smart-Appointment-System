'use client';
import { useState } from 'react';
import { signup } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import InputField from '../../components/Inputfield';
import Button from '../../components/button';
import { SignupData } from '../../types/auth';

export default function SignupPage() {
    const router = useRouter();
    const [form, setForm] = useState<SignupData>({ name: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup(form);
            router.push('/login');
        } catch (err) {
            console.error(err);
            alert('Signup failed');
        }
    };

    return (
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
                <p className="text-gray-500 dark:text-gray-400">Join SmartApp today and start booking</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
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
                    <Button type="submit">Sign Up</Button>
                </div>
            </form>
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <a href="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                    Log in
                </a>
            </p>
        </div>
    );
}
