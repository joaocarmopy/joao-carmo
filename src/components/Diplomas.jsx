import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Download, Eye, X } from 'lucide-react';

const Diplomas = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const diplomas = [
     {
      name: 'MBA Data Science',
      institution: 'USP/Esalq',
      year: '2025',
      file: '/diplomas/data_science.pdf'
    },
    {
      name: 'Diploma de Engenharia Agronômica',
      institution: 'Unisalesiano',
      year: '2022',
      file: '/diplomas/Eng_Agronomica.pdf'
    },
    {
      name: 'Diploma de Técnico em Edificações',
      institution: 'Centro Paula Souza',
      year: '2017',
      file: '/diplomas/Edificacoes.pdf'
    },
    {
      name: 'Histórico Ensino Médio',
      institution: 'Elzira Garbino Pagani',
      year: '2017',
      file: '/diplomas/Historico_Ensino_Medio.pdf'
    },
  ];

  return (
    <section id="diplomas" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Diplomas Acadêmicos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diplomas.map((diploma, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10 flex flex-col"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{diploma.name}</h3>
                    <p className="text-sm text-gray-400">{diploma.institution}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{diploma.year}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedPdf(diploma)}
                      className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                      title="Visualizar"
                    >
                      <Eye size={20} />
                    </button>
                    <a 
                      href={diploma.file} 
                      download
                      className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
                      title="Baixar"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-700"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
                <h3 className="text-lg font-bold text-white">{selectedPdf.name}</h3>
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="p-1 hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X className="text-white" />
                </button>
              </div>
              <div className="flex-1 bg-slate-800 p-1">
                <iframe 
                  src={selectedPdf.file} 
                  className="w-full h-full rounded bg-white" 
                  title={selectedPdf.name}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Diplomas;