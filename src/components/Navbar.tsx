import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", path: "/" },
  { label: "Publications", path: "/publications" },
  { label: "CV", path: "/cv" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Niki Foteinopoulou
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
