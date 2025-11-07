
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 dark:text-gray-400 hover:text-primary-500 text-2xl">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
