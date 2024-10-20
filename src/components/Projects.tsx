import React from 'react';

interface ProjectsProps {
  language: string;
  translations: any;
  theme: string;
}

const Projects: React.FC<ProjectsProps> = ({
  language,
  translations,
  theme,
}) => {
  const projects = [
    {
      title: translations[language].schoolManagementSystem,
      technologies: 'Java, Spring Boot, Hibernate, Maven, MySQL, React, Redux',
      description: translations[language].schoolManagementSystemDesc,
      link: 'https://github.com/mamiyaso/sms-b',
    },
    {
      title: translations[language].surveyApplication,
      technologies: 'Node.js, MongoDB, React, Express.js',
      description: translations[language].surveyApplicationDesc,
      link: 'https://github.com/mamiyaso/survey',
    },
    {
      title: translations[language].movieDiscoveryApp,
      technologies: 'React, Bootstrap, JavaScript',
      description: translations[language].movieDiscoveryAppDesc,
      link: 'https://github.com/mamiyaso/movie',
    },
    {
      title: translations[language].chatApplication,
      technologies: 'Kotlin, Firebase',
      description: translations[language].chatApplicationDesc,
      link: 'https://github.com/mamiyaso/chat',
    },
    {
      title: translations[language].clockAndStopwatchApp,
      technologies: 'React Native, Expo',
      description: translations[language].clockAndStopwatchAppDesc,
      link: 'https://github.com/mamiyaso/clock',
    },
    {
      title: translations[language].notepadApplication,
      technologies: 'Flutter, Dart, Supabase, PostgreSQL',
      description: translations[language].notepadApplicationDesc,
      link: 'https://github.com/mamiyaso/NoteEngineer',
    },
    {
      title: translations[language].todoApplication,
      technologies: 'Vue.js',
      description: translations[language].todoApplicationDesc,
      link: 'https://github.com/mamiyaso/todo-app',
    },
    {
      title: translations[language].zombieGame,
      technologies: 'C#, Unity',
      description: translations[language].zombieGameDesc,
      link: 'https://github.com/mamiyaso/zombie-game',
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">
        {translations[language].projects}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              theme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-2">{project.technologies}</p>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className={`${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              {translations[language].viewProject}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
