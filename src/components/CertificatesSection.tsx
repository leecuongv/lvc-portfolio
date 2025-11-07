import React from 'react';
import { CERTIFICATES } from '../constants';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Certificates</h2>
          <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {CERTIFICATES.map((cert, index) => (
                    <li key={index} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {cert.url && cert.url !== '#' ? (
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                        {cert.title} <i className="fas fa-external-link-alt text-xs ml-1"></i>
                                    </a>
                                ) : (
                                    cert.title
                                )}
                            </h3>
                            <p className="text-md text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                        </div>
                        <p className="mt-2 sm:mt-0 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">{cert.date}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;