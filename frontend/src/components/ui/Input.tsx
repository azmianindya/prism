import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
    return (
        <div className="space-y-1.5">
            {label && (
                <label className="text-sm font-semibold text-gray-700">{label}</label>
            )}
            <input
                className={`
                    w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-sm 
                    focus:outline-none focus:border-purple-500 focus:bg-white 
                    transition-all duration-300
                    ${error ? 'border-red-500' : 'border-gray-200'}
                    ${className}
                `}
                {...props}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;