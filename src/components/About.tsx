import React from 'react';

interface AboutProps {
  language: string;
  translations: any;
}

const About: React.FC<AboutProps> = ({ language, translations }) => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{translations[language].about}</h2>
      <p className="text-lg">
        {translations[language].aboutContent}
      </p>
    </section>
  );
};

export default About;