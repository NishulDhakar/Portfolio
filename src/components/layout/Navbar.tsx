"use client";

import React, { useState, useRef } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import DesktopNav from "./DesktopNav";

import MobileNav from "./MobileNav";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (currentY) => {
    setScrolled(currentY > 20);
    const delta = currentY - lastScrollY.current;
    if (currentY < 10) {
      setShowNav(true);
    } else if (delta > 0) {
      setShowNav(false); 
    } else if (delta < 0) {
      setShowNav(true); 
    }
    lastScrollY.current = currentY;
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 mt-4 pb-2.5">
      <motion.nav
        animate={{
          y: scrolled ? 10 : 0,
          width: scrolled ? "48%" : "100%",
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`rounded-4xl hidden sm:flex mx-auto px-4 sm:px-8 py-2 max-w-3xl items-center justify-between`}
      >
        
        <div className="pr-8">
        <DesktopNav />
        </div>

      </motion.nav>

      <div className="sm:hidden relative w-full">
        <button
          className="absolute top-4 right-4 z-50 text-2xl text-neutral-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </motion.div>
  );
}
