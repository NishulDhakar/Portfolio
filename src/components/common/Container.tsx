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
      className={`mx-auto border max-w-3xl px-6 md:px-10 ${className}`}
      {...props}>
      {children}
    </div>
  );
}
