import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="border-t border-black py-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm md:text-base">© Luke Williams | 2026</p>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:gap-7 md:text-base">
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className={`font-medium transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === href ? "text-orange-500" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
