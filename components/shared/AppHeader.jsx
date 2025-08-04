import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import { useRouter } from 'next/router';

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setActiveTheme] = useState('light');
  const router = useRouter();

  const toggleMenu = () => setShowMenu(!showMenu);

  const showHireMeModal = () => {
    const html = document.getElementsByTagName('html')[0];
    if (!showModal) {
      html.classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      html.classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  };

  const handleThemeSwitch = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  const NavLink = ({ href, children }) => (
    <Link
      href={router.pathname === href ? '#' : href}
      className={`text-lg font-bold ${
        router.pathname === href
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="nav" className="sm:container sm:mx-auto">
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl flex justify-between items-center py-6 px-4 sm:px-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-bold text-[#938EED] dark:text-[#938EED] cursor-pointer">
              Warda Soulaimana
            </h1>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center space-x-6">
          <NavLink href="/formations">Formations</NavLink>
          <NavLink href="/experiences">Expériences</NavLink>
          <NavLink href="/competences">Compétences</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Theme switch */}
        <div
          onClick={handleThemeSwitch}
          aria-label="Theme Switcher"
          className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer sm:block hidden"
        >
          {activeTheme === 'dark' ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light text-xl" />
          ) : (
            <FiSun className="text-gray-700 hover:text-gray-900 text-xl" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} type="button" className="focus:outline-none" aria-label="Hamburger Menu">
            {showMenu ? (
              <FiX className="text-3xl text-secondary-dark dark:text-ternary-light" />
            ) : (
              <FiMenu className="text-3xl text-secondary-dark dark:text-ternary-light" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="sm:hidden px-4 py-3 space-y-2 bg-white dark:bg-ternary-dark shadow-md">
          <NavLink href="/formations">Formations</NavLink>
          <NavLink href="/competences">Compétences</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/experiences">Expériences</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      )}

      {/* Hire Me Modal */}
      {showModal && <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />}
    </motion.nav>
  );
}

export default AppHeader;
