import React, { useEffect } from 'react';
import { Sun, Moon, GlobeIcon } from 'lucide-react';

interface HeaderProps {
  language: string;
  translations: any;
  theme: string;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  translations,
  theme,
  toggleTheme,
  toggleLanguage,
}) => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('header a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 z-50 transition-all duration-500">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Muhammed Yasin Porduğan</h1>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#about">{translations[language].about}</a>
          </li>
          <li>
            <a href="#skills">{translations[language].skills}</a>
          </li>
          <li>
            <a href="#projects">{translations[language].projects}</a>
          </li>
          <li>
            <a href="#certificates">{translations[language].certificates}</a>
          </li>
          <li>
            <a href="#contact">{translations[language].contact}</a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white text-blue-600 transition-all duration-300 hover:scale-110"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-white text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              <GlobeIcon size={20} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
