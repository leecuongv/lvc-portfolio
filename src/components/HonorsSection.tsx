import React from 'react';
// Fix: Import HONORS_AND_AWARDS instead of non-existent HONORS_AND_ACTIVITIES.
import { HONORS_AND_AWARDS } from '../constants';

const HonorsSection: React.FC = () => {
  return (
    <section id="honors" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Honors & Activities</h2>
          <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute w-0.5 h-full bg-primary-300 dark:bg-primary-700 left-1/2 transform -translate-x-1/2"></div>

          {/* Fix: Use HONORS_AND_AWARDS array */}
          {HONORS_AND_AWARDS.map((honor, index) => (
            <div key={index} className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:block z-10">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  {/* Fix: Use dynamic icon from data instead of hardcoded 'fa-star' */}
                  <i className={honor.icon}></i>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-5/12">
                <p className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-1">{honor.period}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{honor.title}</h3>
                <p className="text-md font-medium text-gray-500 dark:text-gray-400 mb-3">{honor.context}</p>
                {/* Fix: Check for achievements array as it is optional, to prevent runtime errors. */}
                {honor.achievements && honor.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                    {honor.achievements.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                )}
                {honor.proofUrl && honor.proofUrl !== '#' && (
                  <a href={honor.proofUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                    View Proof <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
