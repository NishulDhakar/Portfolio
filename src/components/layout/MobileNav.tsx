"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggleButton } from "../Theam/ThemeSwitch";
import { navbarConfig } from "@/data/Navbar";


export default function MobileNav({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    // const { scrollY } = useScroll();
// const [showNav, setShowNav] = useState(true);
// const lastScrollY = useRef(0);

// useMotionValueEvent(scrollY, "change", (currentY) => {
//   if (typeof window === "undefined") return;

//   const delta = currentY - lastScrollY.current;

//   if (currentY < 10) {
//     setShowNav(true); // Always show when near top
//   } else if (delta > 0) {
//     setShowNav(false); // Hide when scrolling down
//   } else if (delta < 0) {
//     setShowNav(true); // Show when scrolling up
//   }

//   lastScrollY.current = currentY;
// });
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 flex flex-col items-center justify-center px-4"
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-3xl text-neutral-900 dark:text-white hover:scale-110 transition-all"
        >
            
         
        </button>
      </div>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
        className="flex flex-col gap-6 items-center justify-center"
      >
        <ThemeToggleButton variant="circle" start="top-right" blur />
        {navbarConfig.navItems.map((item, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="text-3xl font-semibold text-neutral-900 dark:text-white hover:scale-105 transition-transform"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
