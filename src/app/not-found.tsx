'use client';

import { useEffect } from 'react';
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-black">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Oops!
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
        Something went wrong
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition"
        >
          Go Home
        </Link>
      </div>
      
      {/* Development Error Details */}
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-8 max-w-md">
          <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            Debug Info
          </summary>
          <div className="mt-3 p-4 bg-gray-100 dark:bg-gray-900 rounded text-left">
            <code className="text-xs text-red-600 dark:text-red-400 break-all">
              {error.message}
            </code>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                ID: {error.digest}
              </p>
            )}
          </div>
        </details>
      )}
    </div>
  );
}