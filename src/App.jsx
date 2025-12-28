import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Diplomas from './components/Diplomas';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>João Paulo Cardoso do Carmo - Portfólio</title>
        <meta name="description" content="Portfólio de João Paulo Cardoso do Carmo - Desenvolvedor de IA, Cientista de Dados e Engenheiro Agrônomo especializado em soluções de inteligência artificial e ciência de dados." />
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Diplomas />
        <Experience />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;