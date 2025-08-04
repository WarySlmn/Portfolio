import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSingle = ({ id, img, title, category, socialLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <Link
          href="/projects/[id]"
          as={`/projects/${id}`}
          aria-label="Single Project"
          passHref
        >
          <div>
            <Image
              src={img}
              className="rounded-t-xl border-none"
              alt={title}
              layout="responsive"
              width={100}
              height={90}
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="block text-lg text-ternary-dark dark:text-ternary-light mb-4">
              {category}
            </span>
          </div>
        </Link>

        {/* Liens utiles (SocialSharing) */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="px-4 pb-4 text-center flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
