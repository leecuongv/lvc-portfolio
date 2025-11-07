import React from 'react';
// Fix: Import HONORS_AND_AWARDS instead of non-existent AWARDS.
import { HONORS_AND_AWARDS } from '../constants';

const AwardsSection: React.FC = () => {
  // Fix: Filter HONORS_AND_AWARDS to get only the awards.
  const AWARDS = HONORS_AND_AWARDS.filter(item => item.icon === 'fas fa-award');
  return (
    <section id="awards" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Awards</h2>
          <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute w-0.5 h-full bg-primary-300 dark:bg-primary-700 left-1/2 transform -translate-x-1/2"></div>

          {/* Awards */}
          {AWARDS.map((award, index) => (
            <div key={index} className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:block z-10">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-award"></i>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-5/12">
                {/* Fix: Use 'period' instead of 'date' to match the data structure */}
                <p className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-1">{award.period}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{award.title}</h3>
                {/* Fix: Use 'context' instead of 'issuer' to match the data structure */}
                <p className="text-md font-medium text-gray-500 dark:text-gray-400">{award.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
