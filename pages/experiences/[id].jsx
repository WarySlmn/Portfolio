import { useRouter } from "next/router";
import Image from "next/image";
import { experiencesData } from "../../data/experiencesData";

export default function ExperienceDetails() {
  const router = useRouter();
  const { id } = router.query;

  // On récupère l’expérience par son ID
  const experience = experiencesData.find(
    (exp) => exp.id === parseInt(id)
  );

  if (!experience) {
    return (
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-center">
          Expérience introuvable
        </h1>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour
        </button>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 px-4 max-w-3xl">
      {/* ✅ Titre */}
      <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>

      {/* ✅ Entreprise et détails */}
      <p className="text-lg text-gray-600 mb-2">{experience.company}</p>
      <p className="text-sm text-gray-500 mb-6">
        {experience.period} • {experience.location} • {experience.type}
      </p>

      {/* ✅ Images */}
      {experience.images && experience.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {experience.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${experience.title} image ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      )}
      <p className="text-lg text-gray-600 mb-2">{experience.company}</p>

{/* ✅ Lien vers le site */}
{experience.website && (
  <a
    href={experience.website}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mb-4 text-blue-600 underline hover:text-blue-800"
  >
    Visiter le site {experience.company}
  </a>
)}

      {/* ✅ Description */}
      <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line mb-6">
        {experience.description}
      </p>

      {/* ✅ PDF intégré si dispo */}
      {experience.pdf && (
        <div className="my-6">
          <iframe
            src={experience.pdf}
            width="100%"
            height="600px"
            className="border rounded"
          />
        </div>
      )}

      {/* ✅ Bouton retour */}
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Retour
      </button>
    </main>
  );
}
