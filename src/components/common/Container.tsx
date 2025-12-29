import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto  max-w-4xl px-6 md:px-10 ${className}`}
      {...props}>
      {children}
    </div>
  );
}
