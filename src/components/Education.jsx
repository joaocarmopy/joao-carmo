import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MBA Data Science and Analytics',
      institution: 'USP/Esalq',
      period: 'jul 2023 - ago 2025',
      location: 'EAD',
      description: 'Estudos avançados em machine learning, análise estatística, big data e business intelligence.',
      icon: Award,
    },
    {
      degree: 'Engenharia Agronômica',
      institution: 'Unisalesiano',
      period: 'jan 2018 - dez 2022',
      location: 'Lins, SP',
      description: 'Bacharelado com foco em práticas agrícolas sustentáveis e integração tecnológica.',
      icon: GraduationCap,
    },
    {
      degree: 'Técnico em Edificações',
      institution: 'Centro Paula Souza',
      period: 'jul 2016 - dez 2017',
      location: 'Lins, SP',
      description: 'Certificação técnica em fundamentos de engenharia.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Educação
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-3">
                      <span className="text-blue-400 font-medium">{item.institution}</span>
                      <span className="text-gray-500">{item.period}</span>
                      <span className="text-gray-500 md:ml-auto">{item.location}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;