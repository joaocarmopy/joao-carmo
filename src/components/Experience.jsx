import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Cpu, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvedor IA',
      company: 'Sigma Geotecnologias',
      period: 'set 2025 - Atualmente',
      location: 'Ribeirão Preto, SP',
      description: 'Desenvolvimento de soluções de IA, criação de modelos de machine learning e automação inteligente. Trabalho com processamento de linguagem natural e visão computacional.',
      icon: Sparkles,
      technologies: ['Python', 'IA', 'Machine Learning', 'Geotecnologias'],
    },
    {
      title: 'P&D IA',
      company: 'Bemagro',
      period: 'jan 2023 - ago 2025',
      location: 'Ribeirão Preto, SP',
      description: 'Pesquisa e desenvolvimento em inteligência artificial aplicada ao agronegócio.',
      icon: Cpu,
      technologies: ['P&D', 'Deep Learning', 'Inovação', 'AgTech'],
    },
    {
      title: 'Analista de Controle de Dados',
      company: 'Lins Agroindustrial',
      period: 'out 2019 - jan 2023',
      location: 'Lins, SP',
      description: 'Controle de qualidade de dados, validação de sistemas e relatórios automatizados. Garantia de integridade de dados entre plataformas.',
      icon: TrendingUp,
      technologies: ['AutoCAD', 'AgroCAD', 'QGIS', 'Análise de Dados'],
    },
    {
      title: 'Jovem Aprendiz',
      company: 'CAMDA',
      period: 'abr 2018 - out 2019',
      location: 'Lins, SP',
      description: 'Início da carreira profissional, aprendendo processos de negócios, gestão de dados e sistemas corporativos.',
      icon: Briefcase,
      technologies: ['Pacote Office', 'Gestão Administrativa'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 md:mb-16"
                >
                  <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    {/* Content */}
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10">
                        <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                            <exp.icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                          <p className="text-gray-500 text-sm">{exp.period}</p>
                          <p className="text-gray-500 text-sm italic">{exp.location}</p>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300 border border-slate-600/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-950 z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;