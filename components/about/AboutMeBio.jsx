import React from 'react';
import Image from 'next/image';

function AboutMeBio() {
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src="/images/profile.jpeg"
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          Étudiante en MIAGE passionnée par la data et l’optimisation des processus.
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;
