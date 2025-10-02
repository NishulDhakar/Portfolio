'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        {/* Animated Error Icon */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto border-2 border-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto border border-red-500/30 rounded-full animate-pulse"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-6xl font-thin text-white tracking-wide">
            404
          </h1>
          <p className="text-gray-400 text-lg font-light">
            Something went wrong
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={reset}
          className="group relative px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Try Again</span>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Development Error Details */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-white transition-colors">
              Debug Info
            </summary>
            <div className="mt-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <code className="text-xs text-red-400 break-all">
                {error?.message || 'Unknown error'}
              </code>
              {error?.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  ID: {error.digest}
                </p>
              )}
            </div>
          </details>
        )}

        {/* Subtle Footer */}
        <div className="pt-8">
          <button
            onClick={() => window.location.href = '/'}
            className="text-gray-600 hover:text-white text-sm transition-colors underline underline-offset-4"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}