'use client';
import { useRouter } from 'next/navigation';
import Button from '../../components/button';

export default function DashboardPage() {
    const router = useRouter();

    const handleLogout = () => {
        // Clear auth state here if implemented
        router.push('/login');
    };

    return (
        <div className="max-w-4xl w-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                    <p className="text-gray-500 dark:text-gray-400">Welcome back to your workspace.</p>
                </div>
                <div className="w-32">
                    <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
                        Logout
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Appointments</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12</p>
                </div>
                <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                    <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">Total Tasks</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">48</p>
                </div>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Efficiency</h3>
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">94%</p>
                </div>
            </div>

            <div className="mt-8 p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-gray-500">
                <p>Your upcoming schedule will appear here.</p>
            </div>
        </div>
    );
}
