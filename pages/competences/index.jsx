import React from "react";
import { competencesData } from "../../data/competencesData";

export default function Competences() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Compétences
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {competencesData.map((comp) => (
          <div
            key={comp.id}
            className="p-6 bg-white dark:bg-ternary-dark rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {/* Icône */}
            <div
              className={`w-12 h-12 ${comp.iconBg} flex items-center justify-center rounded-full text-2xl mb-4`}
            >
              {comp.iconText}
            </div>

            {/* Titre catégorie */}
            <h2 className="text-xl font-bold mb-3">{comp.category}</h2>

            {/* Liste des compétences */}
            <ul className="space-y-3">
              {comp.skills.map((skill, index) => (
                <li key={index}>
                  {typeof skill === "string" ? (
                    // ✅ Affichage normal
                    <span className="flex items-center space-x-2">⭐ {skill}</span>
                  ) : (
                    // ✅ Affichage pour objets { name, level }
                    <div className="flex justify-between text-sm font-medium">
                      <span>🌐 {skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
