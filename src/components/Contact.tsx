import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  language: string;
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ language, translations }) => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{translations[language].contact}</h2>
      <div className="flex flex-col space-y-4">
        <a href="mailto:mmyasocial@gmail.com" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <Mail size={20} className="mr-2" />
          mmyasocial@gmail.com
        </a>
        <a href="https://github.com/mamiyaso" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <Github size={20} className="mr-2" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/muhammed-yasin-porduğan-b43b91323/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <Linkedin size={20} className="mr-2" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;