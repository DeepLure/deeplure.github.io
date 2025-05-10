import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation link structure
interface NavLink {
  path: string;
  label: string;
}

// Navigation links used in the menu
const NAVIGATION_LINKS: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/team", label: "Team" },
  { path: "/research", label: "Research" },
  { path: "/contact", label: "Contact" },
];

/**
 * Navigation component with hamburger menu
 * 
 * Provides site-wide navigation with an expandable overlay menu
 */
export default function Navigation() {
  // State to track menu open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu (used when clicking a link)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-accent/30 backdrop-blur-sm hover:bg-accent/50 transition-colors"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-primary" />
        )}
      </button>

      {/* Full-screen Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8 text-center">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <span 
                    className="text-3xl font-georama font-light text-primary hover:text-secondary transition-colors cursor-pointer"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}