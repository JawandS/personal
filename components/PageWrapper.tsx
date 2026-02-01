"use client";

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
}

export default function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <div className="relative min-h-screen w-full overflow-auto">
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-4 pt-24 pb-20 sm:px-8">
        <h1 className="mb-12 text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {children}
      </div>
    </div>
  );
}
