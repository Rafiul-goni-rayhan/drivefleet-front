"use client"; // Error components must be Client Components

import React, { useEffect } from 'react';

const ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
            <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-red-100 text-center max-w-lg border border-red-50">
                {/* Error Icon */}
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.34c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">কিছু একটা ভুল হয়েছে!</h1>
                

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                    >
                        try again
                    </button>

                   
                </div>
                
                {/* Error details (ঐচ্ছিক - শুধু ডেভেলপমেন্টের জন্য রাখতে পারেন) */}
                {error?.message && (
                    <p className="mt-6 text-xs text-red-400 font-mono bg-red-50 p-2 rounded">
                        Error: {error.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;