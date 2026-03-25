import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M10 30V10L30 30V10" 
        stroke="url(#logo-grad)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="30" cy="10" r="4" fill="#D22B2B" className="animate-pulse" />
      <defs>
        <linearGradient id="logo-grad" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#f87171" />
          <stop offset="1" stopColor="#D22B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
