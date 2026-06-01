import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 select-none">
            <div className="text-center max-w-md mx-auto">
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse tracking-widest">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-6 tracking-tight">
                    Page Not Found
                </h2>
                
                <p className="text-slate-500 mt-3 text-base leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-100 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;