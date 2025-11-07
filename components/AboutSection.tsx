
import React from 'react';
import { PERSONAL_INFO, SOFT_SKILLS, LANGUAGES } from '../constants';

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4 border-b-2 border-primary-200 dark:border-primary-700 pb-2">{title}</h3>
        {children}
    </div>
);

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h2>
                    <div className="mt-2 w-24 h-1 bg-primary-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="md:col-span-2 lg:col-span-1">
                        <SectionCard title="Contact">
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li><i className="fas fa-envelope mr-3 text-primary-500"></i>{PERSONAL_INFO.email}</li>
                                <li>
                                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                        <i className="fab fa-github mr-3 text-primary-500"></i>{PERSONAL_INFO.github.replace('https://', '')}
                                    </a>
                                </li>
                                <li>
                                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                                        <i className="fab fa-linkedin mr-3 text-primary-500"></i>{PERSONAL_INFO.linkedin.replace('https://', '')}
                                    </a>
                                </li>
                                <li><i className="fas fa-phone mr-3 text-primary-500"></i>{PERSONAL_INFO.phone}</li>
                            </ul>
                        </SectionCard>
                    </div>

                    <div>
                        <SectionCard title="Soft Skills">
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                {SOFT_SKILLS.map(skill => <li key={skill}><i className="fas fa-check-circle mr-3 text-green-500"></i>{skill}</li>)}
                            </ul>
                        </SectionCard>
                    </div>
                    
                    <div>
                        <SectionCard title="Language">
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                {LANGUAGES.map(lang => <li key={lang}><i className="fas fa-language mr-3 text-blue-500"></i>{lang}</li>)}
                            </ul>
                        </SectionCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
