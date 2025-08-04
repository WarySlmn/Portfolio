import React from "react";
import Link from "next/link";
import { experiencesData } from "../../data/experiencesData";

export default function Experiences() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Expériences professionnelles
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {experiencesData.map((exp) => (
          <div
            key={exp.id}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white dark:bg-ternary-dark"
          >
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.period} • {exp.location} • {exp.type}
            </p>
            <p className="text-gray-700 dark:text-gray-200 mt-2 whitespace-pre-line">
              {exp.description}
            </p>
            <Link
              href={`/experiences/${exp.id}`}
              className="text-blue-600 underline mt-2 block"
            >
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
