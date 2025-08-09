import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Typewriter } from 'react-simple-typewriter';
import laola from './assets/laola.jpg';
import robot from './assets/robot.jpeg';
import perfil from './assets/perfil.jpg';
import { Menu, X } from "lucide-react"; // Iconos hamburguesa

// Font Awesome Icons
import {
  FaReact, FaAngular, FaJs, FaHtml5, FaCss3Alt, FaWhatsapp,
  FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope, FaDownload
} from "react-icons/fa";

// Simple Icons
import {
  SiTypescript, SiNextdotjs, SiMongodb,
  SiTailwindcss, SiVercel
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";


const technologies = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },

];

const sections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'contact', label: 'Contacto' },
];

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (telefono) => /^[0-9]{7,15}$/.test(telefono);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre || !formData.email || !formData.telefono) {
      setStatus({ type: "error", message: "Todos los campos son obligatorios" });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Correo electrónico inválido" });
      return;
    }
    if (!validatePhone(formData.telefono)) {
      setStatus({ type: "error", message: "Número de teléfono inválido" });
      return;
    }

    // Simulación de envío
    setTimeout(() => {
      setStatus({ type: "success", message: "Formulario enviado correctamente 🎉" });
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    }, 1000);
  };

  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="bg-[#0D1117] text-[#F9FAFB] min-h-screen font-sans">
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
                className={`hover:text-[#10B981] transition-colors duration-300 ${activeSection === section.id ? "text-[#10B981]" : ""
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
                className={`hover:text-[#10B981] transition-colors duration-300 text-left ${activeSection === section.id ? "text-[#10B981]" : "text-white"
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </header>
    

      <main>
        <section id="about" className=" py-20 mb-16 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col justify-center items-center text-center px-4">
              <div className="text-center mt-40 text-3xl text-white font-bold">
                <span>Hola, soy </span>
                <span className="text-[#10B981]">
                  <Typewriter
                    words={['William 👨‍💻', 'Desarrollador Web 💻']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              <br />
              <p className="text-lg max-w-2xl">
                Soy Ingeniero Electronico y desarrollador web con experiencia en React, Node.js y tecnologías modernas. Apasionado por crear experiencias digitales únicas y soluciones prácticas.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                {/* Descargar CV */}
                <a
                  href="/WilliamCV.pdf"
                  download
                  className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-[#10B981] rounded-lg hover:bg-[#0e9e6f] transition"
                >
                  <FaDownload />
                  Descargar CV
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-[#333] rounded-lg hover:bg-[#555] transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/william-apache-desarrollador-web-fullstack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-[#0077B5] rounded-lg hover:bg-[#005f94] transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                {/* Correo */}
                <a
                  href="william07apache@gmail.com"
                  className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-[#6B7280] rounded-lg hover:bg-[#4B5563] transition"
                >
                  <FaEnvelope />
                  Enviar correo
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-20 px-6 md:px-20 bg-[#111827]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">Proyectos</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Proyecto de Tesis */}
              <div className="bg-[#1F2937] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform flex flex-col h-full">
                <img
                  src={robot}
                  alt="Robot sembrador de maíz"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">🤖 Robot Autónomo Sembrador de Maíz</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Proyecto de tesis: diseño y construcción de un robot móvil que navega entre surcos y siembra semillas de maíz cada 20 cm. Cuenta con sensores LiDAR, IMU, Raspberry Pi 4, motores con encoder y un mecanismo electromecánico propio.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>Raspberry Pi 4</li>
                  <li>Sensor LiDAR, IMU y motores con encoder</li>
                  <li>Programación en Python y control en tiempo real</li>
                  <li>Mecanismo de siembra diseñado y ensamblado manualmente</li>
                </ul>
                {/* El mt-auto empuja el botón al fondo */}
                <div className="bg-gray-500 mt-auto rounded-lg">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-5 text-sm font-semibold text-white hover:bg-[#4B5563] rounded-lg transition"
                  >
                    <span>Robot Sembrador de Maíz</span>
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Proyecto La Ola Drinks */}
              <div className="bg-[#1F2937] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform flex flex-col h-full">
                <img
                  src={laola}
                  alt="La Ola Drinks"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">🍹 La Ola Drinks – Tienda de Licores Online</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Desarrollé una tienda virtual moderna y responsiva para La Ola Drinks, un negocio local de licores. Esta aplicación web permite a los usuarios explorar y filtrar productos como cervezas, licores, gaseosas y promociones especiales, todo en una interfaz dinámica y visualmente atractiva.
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>🛒 Catálogo dinámico con productos cargados desde una API administrable.</li>
                  <li>🔍 Scroller animado horizontal para mostrar ofertas y novedades.</li>
                  <li>📱 Diseño responsive, adaptado a móviles, tablets y escritorio.</li>
                  <li>💾 Área administrable para agregar, editar o eliminar productos fácilmente.</li>
                </ul>
                <br />
                <div className="bg-gray-500 mt-auto rounded-lg">
                  <a
                    href="https://laoladrink.tupagina.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-5 text-sm font-semibold text-white hover:bg-[#4B5563] rounded-lg transition"
                  >
                    <span>La Ola Drinks</span>
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="technologies" className="py-20 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-white">Tecnologías que uso</h2>
            <ul className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <motion.li
                  key={tech.name}
                  className="flex items-center gap-2 bg-[#1F2937] px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
                  whileHover={{ y: -3 }}
                >
                  {tech.icon}
                  <span className="text-gray-200 font-medium">{tech.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section id="contact" className="py-20 px-6 md:px-20 bg-[#111827]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-12 text-center md:text-left">Contáctame</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Lado izquierdo */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
                <img
                  src={perfil}
                  alt="Foto de William"
                  className="w-40 h-40 object-cover rounded-full border-4 border-[#10B981]"
                />
                <h3 className="text-2xl font-semibold text-white">William Apache</h3>
                <p className="text-[#D1D5DB]">Ingeniero Electrónico & Desarrollador Web</p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#10B981]">
                    <FaGithub size={28} />
                  </a>
                  <a href="https://www.linkedin.com/in/william-apache-desarrollador-web-fullstack/"
                    target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#10B981]">
                    <FaLinkedin size={28} />
                  </a>
                  <a href="william07apache@gmail.com" className="text-white hover:text-[#10B981]">
                    <FaEnvelope size={28} />
                  </a>
                  <a href="https://wa.me/573112456846" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#10B981]">
                    <FaWhatsapp size={28} />
                  </a>
                  <a href="/CV_William.pdf" download className="text-white hover:text-[#10B981]">
                    <FaDownload size={28} />
                  </a>
                </div>
              </div>

              {/* Lado derecho: Formulario */}
              <div className="bg-[#1F2937] p-6 rounded-2xl shadow-lg">
                {/* Mensaje de estado */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mb-4 p-3 rounded-lg text-center font-semibold ${status.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="grid gap-4">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-[#111827] text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#111827] text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Tu teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-[#111827] text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                  />
                  <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-[#111827] text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981]"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-[#10B981] text-[#0D1117] font-semibold py-3 px-6 rounded-xl hover:bg-[#059669] transition"
                  >
                    Enviar mensaje
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>


      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} William | Portafolio
      </footer>
    </div>
  );
}



