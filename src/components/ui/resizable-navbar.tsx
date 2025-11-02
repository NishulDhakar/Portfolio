"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import React, { useRef, useState } from "react";
import { ThemeToggleButton } from "../Theam/ThemeSwitch";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent transition-all duration-400 ease-out",
        visible && "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg transform translate-y-5 w-[min(40%,800px)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const pathname = usePathname();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <div className={cn("flex items-center gap-3 sm:gap-4 lg:gap-6", className)}>
      {items.map((item, idx) => (
        <div
          key={`nav-${idx}`}
          className="transform transition-transform duration-500 hover:scale-105 active:scale-95"
        >
          <Link 
            href={item.link}
            onClick={onItemClick}
            className={`text-sm sm:text-md lg:text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200 ${
              isActive(item.link) ? 'opacity-100' : 'opacity-60'
            }`}
          >
            {item.name}
          </Link>
        </div>
      ))}
      <div className="transform transition-transform duration-400 hover:scale-105 active:scale-95">
       <ThemeToggleButton variant="circle" start="top-right" blur />
      </div>
    </div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-transparent px-4 py-3 lg:hidden transition-all duration-400 ease-out",
        visible && "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg transform translate-y-5 w-[calc(100%-2rem)] mx-4 rounded-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={cn(
            "absolute left-4 right-4 top-full mt-2 z-50 flex w-auto flex-col items-start justify-start gap-4 rounded-xl bg-white/95 backdrop-blur-md px-6 py-6 shadow-lg dark:bg-neutral-950/95 transition-all duration-450 ease-out opacity-100 transform translate-y-0",
            className,
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-400 hover:scale-105 active:scale-95"
    >
      {isOpen ? (
        <IconX className="w-5 h-5 text-black dark:text-white" />
      ) : (
        <IconMenu2 className="w-5 h-5 text-black dark:text-white" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <div className="transform transition-transform duration-400 hover:scale-105 active:scale-95">
      <Link 
        href="/"
        className="text-lg sm:text-xl font-[family-name:var(--font-instrument-serif)] font-medium hover:opacity-80 hover:underline transition-opacity duration-200"
      >
        Nishul
      </Link>
    </div>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};