import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 border-b border-gray-100">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-gray-900">{children}</h3>
);

export const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">{children}</div>
);