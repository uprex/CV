import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";

export default function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-4 text-gray-800 overflow-hidden"
    >
      {/* Fond animé avec Particles */}
      <Particles className="absolute inset-0"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fullScreen: { enable: false },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 8 },
                    },
                    life: {
                      duration: {
                        value: Infinity,
                        sync: false
                      },
                      count: 0 // 0 = pas de limite de cycles
                    }
                },
                detectRetina: true,
            }}
        />

      {/* Contenu principal */}
      <div className="text-center max-w-xl z-10">
        <h1 className="text-4xl text-white font-bold">Valentin HALLAY</h1>
        <p className="text-lg text-white font-bold mt-2">INGENIEUR DEVELOPPEMENT INFORMATIQUE INDUSTRIELLE</p>
        <button
          onClick={scrollToAbout}
          className="mt-8 border border-white text-white font-semibold px-5 py-2 rounded transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:scale-110 hover:-translate-y-1"
        >
          En savoir plus ↓
        </button>
      </div>
    </motion.header>
  );
}
