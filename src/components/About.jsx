import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

const About = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'joaocarmo.py@gmail.com', href: 'mailto:joaocarmo.py@gmail.com' },
    { icon: Phone, label: 'Telefone', value: '+55 14 99659-9962', href: 'tel:+5514996599962' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/joaocarmopy', href: 'https://www.linkedin.com/in/joaocarmopy' },
    { icon: Github, label: 'GitHub', value: 'github.com/joaocarmopy', href: 'https://github.com/joaocarmopy/joaocarmopy' },
    { icon: MapPin, label: 'Localização', value: 'Ribeirão Preto, SP', href: null },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Desenvolvedor de IA e Cientista de Dados apaixonado, com formação em Engenharia Agronômica. Especializado em usar tecnologia a favor do agro.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Com experiência em aprendizado de máquina, aprendizado profundo e análise de dados, transformo conjuntos de dados complexos em insights acionáveis. Minha formação multidisciplinar me permite abordar problemas sob perspectivas únicas, criando soluções inteligentes que geram impacto no mundo real.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Atualmente focado no avanço da pesquisa e desenvolvimento em IA, estou comprometido em expandir os limites do possível com inteligência artificial e ciência de dados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium break-all">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;