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
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">Compétences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white p-3 rounded shadow text-sm"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
