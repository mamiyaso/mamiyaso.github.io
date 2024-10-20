import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import translations from './translations';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('tr');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Header
        language={language}
        translations={translations}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      <main className="container mx-auto px-4 py-8 pt-24">
        <About language={language} translations={translations} />
        <Skills language={language} translations={translations} />
        <Projects
          language={language}
          translations={translations}
          theme={theme}
        />
        <Certificates
          language={language}
          translations={translations}
          theme={theme}
        />
        <Contact language={language} translations={translations} />
      </main>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
