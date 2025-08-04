import { v4 as uuidv4 } from 'uuid';
export const formationsData = [
  {
    id: 1,
    title: "Master 1 MIAGE",
    school: "Université de Lorraine (IDMC)",
    period: "septembre 2024 – Actuel",
    description:
      " Modules : Conception de systèmes d’information,gestion de projets, intelligence artificielle, Méthodes agiles, jeu d'entreprise, Management des équipes, Statistiques.",
    images: ["/images/Master.jpg", // 🆕
    "/images/Idmc.jpg"], // 🆕
    pdf: "/files/Cours-M1-Miage.pdf", // 🆕
  },
  {
    id: 2,
    title: "Licence MIASHS parcours MIAGE",
    school: "Université de Lorraine (IDMC)",
    period: "Septembre 2023 – Juin 2024",
    description:
      "Modules : Modélisation de bases de données, programmation avancée, rédaction de cahiers des charges, Analyse de données, Gestion Commerciale.",
    images: ["/images/Idmc.jpg", "/images/idmc-licence-miashs.jpg"], // 🆕
  },
  {
    id: 3,
    title: "Licence Informatique",
    school: "École Polytechnique Méditerranéenne",
    period: " Septembre 2021 –  juin 2023",
    description:
      "Méthodes agiles, réseaux, IoT, développement web, bases de données.",
    image: "/images/idmc-licence-miashs.jpg", // 🆕
    // pdf: "/files/Cours-Licence-Informatique.pdf", // 🆕
  },
];
export const selectOptions = [
  'Gestion de projet',
  'Intelligence artificielle',
  'Méthodes agiles',
  'Management des équipes',
  'Statistiques',
  'Modélisation de bases de données',
  'Programmation avancée',
  'Rédaction de cahiers des charges',
  'Analyse de données',
  'Gestion commerciale',
  'Réseaux',
  'IoT',
  'Développement web',
  'Bases de données',
];