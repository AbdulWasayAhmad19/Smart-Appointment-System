import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Welcome to MySmart App
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
        Get started by logging in or signing up. This app is built with
        Next.js, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
