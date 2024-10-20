import React from 'react';

interface SkillsProps {
  language: string;
  translations: any;
}

const Skills: React.FC<SkillsProps> = ({ language, translations }) => {
  const allSkills = [
    {
      name: 'HTML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: 'https://reactjs.org/',
    },
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      link: 'https://angular.io/',
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      link: 'https://vuejs.org/',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      link: 'https://nodejs.org/',
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      link: 'https://expressjs.com/',
    },
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      link: 'https://www.java.com/',
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      link: 'https://spring.io/projects/spring-boot',
    },
    {
      name: 'C#',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      name: '.NET',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      link: 'https://dotnet.microsoft.com/',
    },
    {
      name: 'C',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      link: 'https://en.cppreference.com/w/c/language',
    },
    {
      name: 'Dart',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      link: 'https://dart.dev/',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      link: 'https://www.postgresql.org/',
    },
    {
      name: 'Firebase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'Supabase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      link: 'https://supabase.io/',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'MSSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      link: 'https://www.microsoft.com/en-us/sql-server',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'Kotlin',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      link: 'https://kotlinlang.org/',
    },
    {
      name: 'Flutter',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      link: 'https://flutter.dev/',
    },
    {
      name: 'React Native',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: 'https://reactnative.dev/',
    },
    {
      name: 'Unity',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      link: 'https://unity.com/',
    },
  ];

  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-4">
        {translations[language].skills}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-2">
        {allSkills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200"
            title={skill.name}
          >
            <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
