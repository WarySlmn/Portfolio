import { useRouter } from 'next/router'; 
import Image from 'next/image';
import { formationsData } from '../../data/formationsData';

export default function FormationDetails() {
  const router = useRouter();
  const { id } = router.query;

  const formation = formationsData.find(
    (f) => f.id === parseInt(id)
  );

  if (!formation) {
    return (
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-center">
          Formation introuvable
        </h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">{formation.title}</h1>
      <p className="text-lg text-gray-600 mb-2">{formation.school}</p>
      <p className="text-sm text-gray-500 mb-6">{formation.period}</p>

      {/* 🆕 Affichage de plusieurs images */}
      {formation.images && formation.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {formation.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${formation.title} image ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      )}

      <p className="text-gray-700 mb-6">{formation.description}</p>

      {/* Aperçu PDF */}
      {formation.pdf && (
        <div className="my-6">
          <iframe
            src={formation.pdf}
            width="100%"
            height="600px"
            className="border rounded"
          />
        </div>
      )}

      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Retour
      </button>
    </main>
  );
}
