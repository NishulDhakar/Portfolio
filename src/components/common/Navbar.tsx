import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-50 rounded-md py-8 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <div className="flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
