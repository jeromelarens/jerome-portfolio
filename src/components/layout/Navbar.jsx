import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* ================= SCROLL SHRINK ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C7A183] after:transition-all";

  const linkActive =
    "text-[#C7A183] after:w-full";

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="px-4 md:px-8">
        <nav
          className={`mx-auto max-w-[1400px]
            flex items-center justify-between
            rounded-full backdrop-blur-md
            border transition-all duration-300
            ${
              scrolled
                ? "px-6 py-2 bg-white/80 dark:bg-[#111]/80 shadow-md"
                : "px-8 py-4 bg-white/70 dark:bg-[#111]/70"
            }
            border-gray-200 dark:border-gray-800`}
        >
          {/* ================= LOGO ================= */}
          <span
            className={`italic font-medium tracking-wide
              transition-all duration-300
              ${
                scrolled
                  ? "text-base text-[#5A3A24]"
                  : "text-lg text-[#5A3A24]"
              }`}
          >
            @Jerome-Larens
          </span>

          {/* ================= LINKS ================= */}
          <div className="flex items-center gap-8 text-sm">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${linkBase}
                  ${
                    active === id
                      ? linkActive
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:after:w-full"
                  }`}
              >
                {label}
              </a>
            ))}

            {/* ================= THEME TOGGLE ================= */}
            <button
              onClick={toggleTheme}
              className="ml-2 px-4 py-1.5 rounded-full
                         border border-gray-300 dark:border-gray-700
                         text-xs font-medium
                         hover:bg-gray-100 dark:hover:bg-[#1c1c1c]
                         transition"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
