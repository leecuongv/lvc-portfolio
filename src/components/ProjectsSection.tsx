
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Personal Projects</h2>
          <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map(project => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    <h3 className="text-2xl font-bold">{project.title} <i className="fas fa-external-link-alt text-xs ml-1"></i></h3>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-2xl">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
