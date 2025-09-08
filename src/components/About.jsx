import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-10 bg-white p-5 rounded shadow"
>
      <motion.img
          src="/pdp.jpg"
          alt="Photo de Valentin HALLAY"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">À propos</h2>
      <p className="text-gray-800 text-sm mb-4">
        Ingénieur en développement informatique industrielle basé à Lyon, j'ai un fort attrait pour le développement d'applications ayant un réél impact sur le quotidien des utilisateurs.
        Fort de plusieurs années d’expérience dans le domaine de l'industrie je suis spécialisé dans la logistique des WCS et WMS et des équipements qui gravitent autour.
      </p>
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        <li><strong>Poste :</strong> Ingénieur d'étude</li>
        <li><strong>Localisation :</strong> Lyon, France</li>
        <li><strong>Spécialités :</strong> C# .NET, Azure DevOps, Docker, SQL </li>
        <li><strong>Objectif :</strong> Créer des applications ayant un fort apport fonctionnel</li>
        <li><strong>Véhiculé :</strong> Permis B</li>
        <li><strong>Langues :</strong> Français (Natif) Anglais (Professionnel) </li>
      </ul>
    </motion.section>
  );
}
