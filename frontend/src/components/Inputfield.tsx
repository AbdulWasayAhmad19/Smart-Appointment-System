import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const InputField: React.FC<InputProps> = ({ label, ...props }) => (
    <div className="flex flex-col mb-4">
        {label && <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">{label}</label>}
        <input
            className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            {...props}
        />
        {/* We explicitly ignore children here to prevent the 'void element' error */}
    </div>
);

export default InputField;
