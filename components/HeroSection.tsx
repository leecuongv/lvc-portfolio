
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary-400 dark:border-primary-500 mx-auto lg:mx-0">
            <img src={'https://github.com/leecuongv/gemini-portfolio/blob/main/public/avt.jpg?raw=true'} alt="Profile Picture" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400">
            {PERSONAL_INFO.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <a href="#projects" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
              View My Work
            </a>
            <a href={PERSONAL_INFO.cvUrl} download className="inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
              Download CV
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
            {/* Can add an illustration or graphic here */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                {PERSONAL_INFO.objective}
            </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;