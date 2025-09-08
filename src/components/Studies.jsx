import { motion } from "framer-motion";

const formations = [
  {
    title: "Manager en système d'information",
    ecole: "CESI - École Supérieure de l'Alternance - Le Mans (72)",
    period: "Oct 2020 - Oct 2021",
    details: "Niveau 7 - RNCP11554 Pilotage de l'évolution d'un SI, gestion des aspects humains, économiques et organisationnels du système."
  },
  {
    title: "Responsable en ingénierie des logiciels",
    ecole: "CESI - École Supérieure de l'Alternance - Le Mans (72)",
    period: "Sep 2018  - Sep 2020",
    details: "Niveau 6 - RNCP14506 Recueil et analyse des besoins, conception et développements de solutions, gestion et pilotage de projet."
  },
  {
    title: "BTS Systèmes numériques optioninformatique réseau",
    ecole: "Lycée Grandmont - Tours (37)",
    period: "Sep 2016  - Jui 2018",
    details: "Conception et gestion de réseaux informatiques, réalisation de diagrammes, planification de tâches et développement d'applications."
  }
];

export default function Formation() {
  return (
    <section className="mb-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-blue-800 flex items-center justify-center">
        <span className="mr-3"></span> Parcours Académique
      </h2>

      <div className="relative">
        {/* Frise verticale (ligne pointillée) */}
        <div className="absolute top-0 left-1/2 h-full border-l-2 border-dashed border-blue-400 transform -translate-x-1/2 z-0 text-justify" />

        {/* Conteneur des formations */}
        <div className="space-y-8">
          {formations.map((formation, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Carte en pleine largeur avec barre latérale */}
              <div className={`text-justify flex w-full ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Barre latérale colorée */}
                <div className={`w-4 ${idx % 2 === 0 ? 'bg-blue-500 rounded-r-lg' : 'bg-blue-300 rounded-l-lg'}`}></div>

                {/* Contenu de la carte */}
                <div className="w-full bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-justify">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-blue-900">{formation.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0">
                      {formation.period}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-blue-500 mr-2"></span>
                    <p className="text-gray-700 font-medium">{formation.ecole}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{formation.details}</p>
                </div>
              </div>

              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
