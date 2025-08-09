import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos hamburguesa

export default function Header({ sections, activeSection, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D1117] shadow-lg z-50">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 text-lg">
        {/* Logo */}
        <div className="font-bold text-[#10B981]">
          <h1>APACHES.<span>WEB</span></h1>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`hover:text-[#10B981] transition-colors duration-300 ${
                activeSection === section.id ? "text-[#10B981]" : ""
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Botón hamburguesa (móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#10B981] transition-colors duration-300"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1117] px-6 py-4 flex flex-col gap-4 border-t border-gray-800">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setMenuOpen(false); // Cierra menú al hacer clic
              }}
              className={`hover:text-[#10B981] transition-colors duration-300 text-left ${
                activeSection === section.id ? "text-[#10B981]" : "text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
