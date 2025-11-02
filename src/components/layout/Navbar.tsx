'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from '../ui/resizable-navbar';
// import { link } from 'fs';

export default function ResizablePortfolioNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'proof-of-work', link: '/projects' },
    // { name: 'blogs', link: '/blog' },
    {name : 'contact' , link : '/contact' },
  ];

  const mobileNavItems = [
    { name: 'Home', link: '/' },
    { name: 'proof-of-work', link: '/projects' },
    // { name: 'blogs', link: '/blog' },
    {name : 'contact' , link : '/contact' },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <div className="flex items-center gap-3">
     
          <NavItems items={navItems} onItemClick={handleItemClick} />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-5 w-full">
            {mobileNavItems.map((item, idx) => (
              <div
                key={`mobile-nav-${idx}`}
                className="transform transition-transform duration-400"
              >
                <Link 
                  href={item.link}
                  onClick={handleItemClick}
                  className="text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200 py-1"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
      
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}