import React from "react";
import { formationsData } from "../../data/formationsData";
import Link from "next/link";

export default function Formations() {
  return (
    <main className="container mx-auto py-12 px-4">
      {/* ✅ Titre principal avec dégradé */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
       Mes formations
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {formationsData.map((formation) => (
          <div
            key={formation.id}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 bg-white dark:bg-ternary-dark"
          >
            {/* Icône */}
            <div className="flex-shrink-0 mt-1 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap text-blue-600"
                aria-hidden="true"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
            </div>

            {/* Contenu - titres en noir */}
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                {formation.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">{formation.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formation.period}</p>
              <p className="text-gray-700 dark:text-gray-200">{formation.description}</p>

              <Link
                href={`/formations/${formation.id}`}
                className="text-blue-600 underline mt-2 block"
              >
                Voir détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
