import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X } from 'lucide-react';

const Certificates = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certificates = [
  {
    name: 'Semana de Agronomia',
    institution: 'Evento Acadêmico',
    year: '2021',
    file:`${import.meta.env.BASE_URL}/certificados/Semana_Agronomia.pdf`,
  },
  {
    name: 'Python Avançado',
    institution: 'Curso',
    year: '2022',
    file:`${import.meta.env.BASE_URL}/certificados/Python_Avancado.pdf`,
  },
  {
    name: 'Produtividade em Canavial',
    institution: 'Curso / Pesquisa',
    year: '2020',
    file:`${import.meta.env.BASE_URL}/certificados/Produtividade_Canavial.pdf`,
  },
  {
    name: 'Orientação por Satélite',
    institution: 'Curso',
    year: '2020',
    file:`${import.meta.env.BASE_URL}/certificados/Orientacao_Satelite.pdf`,
  },
  {
    name: 'John Deere',
    institution: 'John Deere',
    year: '2021',
    file:`${import.meta.env.BASE_URL}/certificados/Jonh_deere.pdf`,
  },
  {
    name: 'Horus',
    institution: 'Plataforma / Curso',
    year: '2021',
    file:`${import.meta.env.BASE_URL}/certificados/Horus.pdf`,
  },
  {
    name: 'Eu Esri',
    institution: 'Esri',
    year: '2022',
    file:`${import.meta.env.BASE_URL}/certificados/EuEsri.pdf`,
  },
  {
    name: 'AgroHacka',
    institution: 'Hackathon',
    year: '2023',
    file:`${import.meta.env.BASE_URL}/certificados/AgroHacka.pdf`,
  },
  {
    name: 'AgroCAD',
    institution: 'Curso',
    year: '2021',
    file:`${import.meta.env.BASE_URL}/certificados/AgroCad.pdf`,
  },
  {
    name: 'Agricultura Orgânica',
    institution: 'Curso',
    year: '2022',
    file:`${import.meta.env.BASE_URL}/certificados/AgriculturaOrganica.pdf`,
  },
  {
    name: 'Agricultura Sustentável',
    institution: 'Curso',
    year: '2022',
    file: `${import.meta.env.BASE_URL}/certificados/Agricultura_Sustentavel.pdf`,
  },
];

  return (
    <section id="certificates" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{cert.date}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedPdf(cert)}
                      className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                      title="Visualizar"
                    >
                      <Eye size={20} />
                    </button>
                    <a 
                      href={cert.file} 
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

export default Certificates;