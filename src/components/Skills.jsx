import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "C# .NET",
    level: 80
  },
  {
    name: "Azure DevOps",
    level: 70
  },
  {
    name: "Docker",
    level: 75
  },
  {
    name: "REST API",
    level: 70
  },
  {
    name: "SQL Server",
    level: 70
  },
  {
    name: "Redis",
    level: 55
  },
  {
    name: "Git",
    level: 90
  },
  {
    name: "RabbitMQ",
    level: 50
  },
  {
    name: "AutoStore",
    level: 70
  },
  {
    name: "Equipements physiques (PLC, Trieurs, Imprimantes, Balances)",
    level: 75
  },
  {
    name: "Informatique logistique",
    level: 85
  },
  {
    name: "WCS / WMS",
    level: 85
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleExample = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-10">
  <h2 className="text-3xl font-bold mb-12 text-blue-800 flex items-center justify-center">
    <span className="mr-3"></span> Compétences
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
    <ul className="list-disc list-inside space-y-3 ">
      {skills
        .filter((_, index) => index % 2 === 0)
        .map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm"
          >
            <span className="font-bold">{skill.name}</span>
          </motion.li>
        ))}
    </ul>

    <ul className="list-disc list-inside space-y-3">
      {skills
        .filter((_, index) => index % 2 !== 0)
        .map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm"
          >
            <span className="font-bold">{skill.name}</span>
          </motion.li>
        ))}
    </ul>
  </div>
</section>

  );
}
