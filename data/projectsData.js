import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	
	{
  id: 1,
  title: 'COVID Death Analysis',
  url: 'covid-death-analysis',
  category: 'Data Analysis',
  img: '/images/covid-project.png',
  ProjectHeader: {
    title: 'COVID Death Analysis',
    publishDate: 'Sep 2024',
    tags: 'SQL / Tableau / Data Cleaning/ Data Analysis, Data Visualization/ Dashboard',
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: 'COVID Death Dashboard',
      img: '/images/covid-Dashboard.png',
    },
	{
				id: uuidv4(),
				title: 'Covid Death Analysis',
				img: '/images/covid-analysis.png',
			},
  ],
  ProjectInfo: {
    ClientHeading: 'À propos',
    CompanyInfo: [
      {
        id: uuidv4(),
        title: 'Projet Personnel',
        details: 'Analyse de données COVID',
      },
    ],
    ObjectivesHeading: 'Objectif',
    ObjectivesDetails:
      'Analyser les données de la population touchée par le COVID dans chaque pays, nettoyer et standardiser les données avec SQL, créer un rapport visuel avec Tableau Public.',
    Technologies: [
      {
        title: 'Outils & Technologies',
        techs: ['SQL','SQL Server', 'Tableau', 'Excel'],
      },
    ],
    ProjectDetailsHeading: 'Détails du projet',
    ProjectDetails: [
      {
        id: uuidv4(),
        details:
          'Données nettoyées et standardisées avec SQL, création de tableaux de bord interactifs via Tableau Public.',
      },
      {
        id: uuidv4(),
        details:
          'Analyse des tendances de décès par COVID, visualisation des données pour une meilleure compréhension.',
      },
    ],
   
  }, // ← fermeture manquante ajoutée
}, // ← fermeture de l'objet du projet

	
{
  id: 2,
  title: "Analyse d’échec d’un projet SharePoint",
  url: "sharepoint-project-analysis",
  category: "Gestion de projet",
  img: '/images/ui-project-1.jpg',
  ProjectHeader: {
    title: "Analyse d’échec d’un projet SharePoint",
    publishDate: "Oct 2024",
    tags: "Gestion de projet / Analyse",
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: "SharePoint Study",
      img: "/images/SharePoint_256x256.png",
    },
	{
	  id: uuidv4(),
	  title: "SharePoint Project Analysis",
	  img: "/images/raci-matrice.png",
	},
  ],
  ProjectInfo: {
    ClientHeading: "À propos",
    CompanyInfo: [
      {
        id: uuidv4(),
        title: "Projet Universitaire",
        details: "Université de Lorraine",
      },
    ],
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Identifier les facteurs ayant conduit à l’échec d’un projet SharePoint et proposer des solutions pour relancer le projet.",
    Technologies: [
      {
        title: "Outils & Méthodes",
        techs: ["Analyse documentaire", "Entretiens", "Gestion du changement", "Matrice RACI"],
      },
    ],
    ProjectDetailsHeading: "Détails du projet et solutions proposées",
    ProjectDetails: [
      {
        id: uuidv4(),
        details:
          "Analyse approfondie des rapports du projet et entretiens avec les parties prenantes pour comprendre les causes de l'échec.",
      },
      {
        id: uuidv4(),
        details:
          "Suivi détaillé du projet et mise en place d'une structure de gestion renforcée pour éviter les dérives.",
      },
      {
        id: uuidv4(),
        details:
          "Utilisation de la matrice RACI afin d'attribuer clairement les rôles et responsabilités, améliorant la communication et la prise de décision.",
      },
      {
        id: uuidv4(),
        details:
          "Mise en place de contrôles pour la gestion des risques et assurer le respect des jalons du projet.",
      },
      {
        id: uuidv4(),
        details:
          "Proposition et organisation d’une formation adéquate pour les utilisateurs finaux afin de maximiser l'adoption de SharePoint.",
      },
    ],
  
  },
},

{
  id: 3,
  title: "Analyse des meilleurs YouTubers au Royaume-Uni (2024)",
  url: "youtube-top-uk-2024",
  category: "Data Analysis",
  img: "/images/youtube/top10_yout.jpg", // Mets une image dans public/images/
  ProjectHeader: {
    title: "Tableau de bord YouTubers UK 2024",
    publishDate: "Août 2024",
    tags: "SQL / Power BI / Data Visualization",
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: "Dashboard Power BI",
      img: "/images/youtube/top10_yout.jpg",
    },
    {
      id: uuidv4(),
      title: "Analyse SQL",
      img: "/images/youtube/kaggle.gif",
    },
  ],
  ProjectInfo: {
    ClientHeading: "Contexte du projet",
    CompanyInfo: [
      {
        id: uuidv4(),
        title: "Projet Personnel",
        details: "Analyse de données YouTube pour Marketing",
      },
    ],
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Créer un tableau de bord interactif permettant d’identifier les YouTubers les plus performants au Royaume-Uni en 2024 afin d'aider les équipes marketing à choisir les bons influenceurs pour leurs campagnes.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: ["Excel", "SQL Server", "Power BI", "GitHub"],
      },
    ],
    ProjectDetailsHeading: "Détails du projet",
    ProjectDetails: [
      {
         id: uuidv4(),
  details: 
    "Exploration initiale des données Kaggle via Excel.\n" +
    " Nettoyage et transformation des données dans SQL Server (suppression colonnes inutiles, gestion des nulls).\n" +
    "Calcul de métriques clés : abonnés, vues totales, vidéos, engagement.\n" +
    "Création d’un tableau de bord Power BI pour visualiser :\n" +
    "   - Top 10 YouTubers par abonnés.\n" +
    "   - Top 3 chaînes par vidéos publiées.\n" +
    "   - Top 3 chaînes par vues totales.\n" +
    "   - Ratio vues/abonnés et engagement par vidéo."
      },
      {
        id: uuidv4(),
        details:
          "• Documentation complète et hébergement des résultats sur GitHub Pages.",
      },
    ],
  },
},

{
  id: 4,
  title: "Social Buzz Data Analysis",
  url: "social-buzz-project",
  category: "Data Analysis / Visualization",
  img: "/images/youtube/accenture.png", // mets l’image dans public/images/socialbuzz/
  ProjectHeader: {
    title: "Social Buzz Data Analysis",
    publishDate: "Février 2025",
    tags: "SQL / Power BI / Data Modeling",
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: "Data Cleaning",
      img: "/images/youtube/Social.png",
    },
    {
      id: uuidv4(),
      title: "Data Modeling",
      img: "/images/youtube/Social1.png",
    },
    
  ],
  ProjectInfo: {
    ClientHeading: "Contexte du projet",
    CompanyInfo: [
      {
        id: uuidv4(),
        title: "Client",
        details: "Social Buzz (simulation Accenture)",
      },
      {
        id: uuidv4(),
        title: "Services",
        details: "Analyse de données, modélisation, visualisation",
      }
    ],
    ObjectivesHeading: "Objectifs",
    ObjectivesDetails:
      "Recueil des besoins, nettoyage et modélisation de données, création d’un tableau de bord et présentation des résultats pour préparer l’IPO de Social Buzz.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: ["SQL", "Power BI", "Excel", "PowerPoint"],
      },
    ],
    ProjectDetailsHeading: "Détails du projet",
    ProjectDetails: [
      {
        id: uuidv4(),
        details:
          "• Simulation de poste d’analyste de données chez Accenture Amérique du Nord via Forage (février 2025).\n" +
          "• Nettoyage, modélisation et analyse de 7 ensembles de données pour identifier les tendances de contenu et guider les décisions stratégiques.\n" +
          "• Conception d’un modèle de données optimisé pour la visualisation.\n" +
          "• Création d’un tableau de bord Power BI présentant les insights clés.\n" +
          "• Préparation d’un dossier PowerPoint et d’une présentation vidéo pour les parties prenantes internes."
      }
    ],
    SocialSharingHeading: "Partager ce projet",
  },
},

	{
  id: 5,
  title: "Club Nautique – Système d’Information",
  url: "club-nautique-si",
  category: "Développement Web / Gestion SI",
  img: "/images/mobile-project-1.jpg", // image à placer dans public/images/clubnautique/
  ProjectHeader: {
    title: "Club Nautique – Système d’Information",
    publishDate: "2024-2025",
    tags: "Symfony / PostgreSQL / UML / SCRUM",
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: "Application",
      img: "/images/gestion_club-nautique1.jpeg",
    },
    {
      id: uuidv4(),
      title: "Application web",
      img: "/images/gestion_club-nautique2.jpeg",
    },
    {
      id: uuidv4(),
      title: "Application web",
      img: "/images/gestion_club-nautique3.jpg",
    }
  ],
  ProjectInfo: {
    ClientHeading: "Contexte du projet",
    CompanyInfo: [
      {
        id: uuidv4(),
        title: "Projet Universitaire",
        details: "Master 1 CSI – Méthode et Optimisation",
      },
      {
        id: uuidv4(),
        title: "Supervision",
        details: "Mme Armelle BRUN, M. Yannick NARBEY",
      }
    ],
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Développer une application web de gestion pour un club nautique afin d’automatiser et optimiser la gestion des cours, locations, forfaits, factures, utilisateurs et archivage des données.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: [
          "Symfony (PHP)",
          "PostgreSQL",
          "Trello (SCRUM)",
          "Lucidchart",
          "UML",
          "Composer",
          "Doctrine ORM"
        ],
      },
    ],
    ProjectDetailsHeading: "Détails du projet",
    ProjectDetails: [
      {
        id: uuidv4(),
        details:
          "• Gestion complète des cours (planification, inscriptions, moniteurs, absences).\n" +
          "• Gestion des clients (création, modifications, inscriptions, forfaits/remises).\n" +
          "• Gestion du matériel nautique (états, locations, déclarations de panne).\n" +
          "• Gestion des utilisateurs avec rôles et droits personnalisés (GRANT, TRIGGER, FUNCTION).\n" +
          "• Facturation et archivage automatique des données (cours, clients, factures, locations).\n" +
          "• Historique complet des actions avec journaux d’audit.\n" +
          "• Modélisation UML : cas d’utilisation, classes, états, séquences, activités.\n" +
          "• Scripts SQL pour gestion avancée des rôles et procédures stockées.\n" +
          "• Tests unitaires et validation fonctionnelle.\n" +
          "• Déploiement local via Symfony server et PostgreSQL.",
      },
      {
        id: uuidv4(),
        details:
          "📂 Dépôt GitHub : https://github.com/triomphant75/Gestion_Club_Nautique\n" +
          "🚀 Pour lancer :\n" +
          "  - Cloner le projet\n" +
          "  - Installer les dépendances (composer install)\n" +
          "  - Créer et migrer la base de données\n" +
          "  - Lancer le serveur Symfony"
      }
    ],

  },
},

{
  id: 6,
  title: "Analyse des Dramas Chinois (C-Dramas)",
  url: "cdramas-webscraping-powerbi",
  category: "Data Analysis ",
  img: "/images/RapportImage.png", // Image principale
  ProjectHeader: {
    title: "Analyse des Dramas Chinois (C-Dramas) via Web Scraping",
    publishDate: "2025",
    tags: "Python / Power BI / Data Visualization",
  },
  ProjectImages: [
    {
      id: uuidv4(),
      title: "Scraping Python",
      img: "/images/RapportImage.png",
    },
    {
      id: uuidv4(),
      title: "Dashboard Power BI",
      img: "/images/C-drama.png",
    }
  ],
  ProjectInfo: {
    ClientHeading: "Contexte du projet",
    CompanyInfo: [
      {
        id: uuidv4(),
        title: "Projet Personnel",
        details: "Analyse des C-Dramas via scraping Python et Power BI",
      },
      {
        id: uuidv4(),
        title: "Site analysé",
        details: "https://mydramalist.com",
      }
    ],
    ObjectivesHeading: "Objectif",
    ObjectivesDetails:
      "Extraire et structurer des données sur les dramas chinois (C-Dramas), analyser les tendances et créer des visualisations interactives pour comprendre les genres, audiences et acteurs populaires.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: [
          "Python (Scrapy, BeautifulSoup, Pandas)",
          "Power BI",
          "Excel"
        ],
      },
    ],
    ProjectDetailsHeading: "Détails du projet",
    ProjectDetails: [
      {
        id: uuidv4(),
        details:
          "• Web scraping avec Python (Scrapy, BeautifulSoup) pour collecter les données des C-Dramas depuis MyDramaList.\n" +
          "• Nettoyage et structuration des données avec Pandas.\n" +
          "• Intégration dans Power BI pour la visualisation et l’analyse des tendances.\n" +
          "• KPI suivis :\n" +
          "   ✔️ Score moyen par genre\n" +
          "   ✔️ Nombre moyen d’épisodes par drama\n" +
          "   ✔️ Évolution des audiences dans le temps\n" +
          "   ✔️ Top acteurs et dramas les plus populaires\n" +
          "• Présentation du projet disponible en ligne.",
      },
    ],
    SocialSharingHeading: "Liens utiles",
    SocialSharing: [
      {
        id: uuidv4(),
        name: "Présentation Canva",
        url: "https://www.canva.com/design/DAGh6FCOrKc/wewnZ9DBmBPWszrDK41Q5g/edit?utm_content=DAGh6FCOrKc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        id: uuidv4(),
        name: "Site MyDramaList",
        url: "https://mydramalist.com"
      }
    ],
  },
}
];
