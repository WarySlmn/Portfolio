import Image from 'next/image';

function AboutClients() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-ternary-dark dark:text-primary-light mb-6">
        Mes clients et partenaires
      </h2>
      <div className="flex flex-wrap gap-6">
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <Image
            src="/images/clients/default-client.png"
            alt="Client"
            width={80}
            height={80}
          />
        </div>
        {/* Ajoute d'autres logos ici si nécessaire */}
      </div>
    </div>
  );
}

export default AboutClients;
