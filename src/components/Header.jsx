import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Link, useLocation } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "/about"],
    ["Work", "/work"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  // Close the mobile menu when the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const textColor = darkMode ? "text-white" : "text-[#333333]";
  const mutedColor = darkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = darkMode ? "border-white/15" : "border-black/15";

  const hoverColor = darkMode
    ? "hover:text-orange-400"
    : "hover:text-orange-500";

  // Toggle theme with a circular reveal animation
  const toggleTheme = (event) => {
    const nextDarkMode = !darkMode;
    const button = event.currentTarget;

    // Use a simple fallback if View Transitions are unsupported
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDarkMode(nextDarkMode);
      return;
    }

    // Find the center of the theme button
    const rect = button.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate how large the circle must grow
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const radius = Math.hypot(maxX, maxY);

    // Save the circle position for the CSS animation
    const root = document.documentElement;

    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-radius", `${radius}px`);

    // Animate the theme change
    document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(nextDarkMode);
      });
    });
  };

  return (
    <header
      className={`relative -mx-5 border-t px-5 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ${
        darkMode ? "border-white/10 bg-black" : "border-black/10 bg-white"
      }`}
    >
      <div className="mx-auto flex min-h-[82px] max-w-[1120px] items-center justify-between gap-4">
        {/* Logo and Navigation */}
        <div className="flex min-w-0 items-center gap-5 sm:gap-7">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Home"
            className={`shrink-0 text-[28px] font-bold leading-none tracking-tight transition-colors duration-200 ${
              location.pathname === "/"
                ? "text-orange-500"
                : `${textColor} hover:text-orange-500`
            }`}
          >
            LW
          </Link>

          {/* Divider */}
          <div
            className={`hidden h-5 border-l sm:block ${borderColor}`}
            aria-hidden="true"
          />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-7">
            {links.map(([label, path]) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap text-base font-medium transition-colors duration-200 ${
                    isActive ? "text-orange-500" : `${textColor} ${hoverColor}`
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {/* X */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className={`${textColor} ${hoverColor} transition-colors duration-200`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.8 4.9 22H1.8l7.3-8.4L1.3 2h6.5l4.5 7.5L18.9 2Zm-1.1 18h1.7L6.8 3.9H5L17.8 20Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={`${textColor} ${hoverColor} transition-colors duration-200`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.08 18.34H5.12V9h2.96v9.34ZM6.6 7.72a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.62h-2.95v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.77V9h2.83v1.28h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.05Z" />
            </svg>
          </a>

          {/* Divider */}
          <div
            className={`mx-1 hidden h-5 border-l sm:block ${borderColor}`}
            aria-hidden="true"
          />

          {/* Dark / Light Mode */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
              darkMode
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-black/[0.04] text-black hover:bg-black/10"
            }`}
          >
            {darkMode ? (
              /* Sun icon */
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.7 8.7 0 1 0 20.2 15.5Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${borderColor} ${textColor}`}
          >
            {menuOpen ? (
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className={`border-t py-4 md:hidden ${borderColor}`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {links.map(([label, path]) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500"
                      : `${mutedColor} ${hoverColor}`
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
