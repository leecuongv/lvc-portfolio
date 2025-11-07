
import React from 'react';
import { HONORS_AND_AWARDS } from '../constants';

const HonorsAndAwardsSection: React.FC = () => {
  return (
    <section id="honors-awards" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Honors & Awards</h2>
          <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute w-0.5 h-full bg-primary-300 dark:bg-primary-700 left-1/2 transform -translate-x-1/2"></div>

          {HONORS_AND_AWARDS.map((item, index) => (
            <div key={index} className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:block z-10">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-5/12">
                <p className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-1">{item.period}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-md font-medium text-gray-500 dark:text-gray-400 mb-3">{item.context}</p>
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                    {item.achievements.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                )}
                {item.proofUrl && item.proofUrl !== '#' && (
                  <a href={item.proofUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
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

export default HonorsAndAwardsSection;
