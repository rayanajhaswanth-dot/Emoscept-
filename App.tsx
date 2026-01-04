import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import Home from './components/Home.tsx';
import Services from './components/Services.tsx';
import Platform from './components/Platform.tsx';
import Contact from './components/Contact.tsx';
import Careers from './components/Careers.tsx';
import { CASE_STUDIES } from './constants.tsx';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setActivePage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (activePage) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/services':
        return (
          <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-heading font-bold mb-16">Services.</h1>
              <div className="grid md:grid-cols-3 gap-8">
                {['business', 'political', 'entertainment'].map((type) => (
                   <div key={type} className="group cursor-pointer bg-white p-10 border border-gray-100 hover:border-brand-gold shadow-sm hover:shadow-2xl transition-all" onClick={() => navigate(`/services/${type}`)}>
                     <h2 className="text-2xl font-heading font-bold capitalize mb-4">{type} Consulting</h2>
                     <p className="text-brand-mutedGray mb-8">Deep strategic expertise specialized for the {type} landscape.</p>
                     <span className="text-brand-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                       Learn More <ArrowRight size={18} />
                     </span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        );
      case '/services/business':
        return <Services type="business" onNavigate={navigate} />;
      case '/services/political':
        return <Services type="political" onNavigate={navigate} />;
      case '/services/entertainment':
        return <Services type="entertainment" onNavigate={navigate} />;
      case '/platform':
        return <Platform />;
      case '/contact':
        return <Contact />;
      case '/careers':
        return <Careers />;
      case '/about':
        return (
          <div className="pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
              <h1 className="text-5xl font-heading font-bold mb-12">The EMOSCEPT Standard.</h1>
              <p className="text-2xl font-light text-brand-mutedGray leading-relaxed mb-12">
                We didn't set out to be another consulting firm. We set out to bridge the gap between abstract strategy and hard data.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold text-brand-deepBlue">Strategic Team</h3>
                    <p className="text-brand-mutedGray">Our team includes former data scientists from top-tier tech hubs, battle-tested political strategists, and studio veterans.</p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-xl font-bold text-brand-deepBlue">Focus on Results</h3>
                    <p className="text-brand-mutedGray">Every proposal includes clear, measurable KPIs. If we don't have a path to a quantifiable outcome, we don't take the project.</p>
                 </div>
              </div>
            </div>
          </div>
        );
      case '/impact':
        return (
           <div className="pt-32 pb-24">
             <div className="container mx-auto px-6">
               <h1 className="text-5xl font-heading font-bold mb-12 text-brand-deepBlue">Impact & Case Studies.</h1>
               <p className="text-xl text-brand-mutedGray mb-16 max-w-2xl font-light">Documented success across high-stakes environments using our proprietary methodology.</p>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {CASE_STUDIES.map((study) => (
                   <div key={study.id} className="bg-white p-10 border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                     <span className="text-[10px] font-bold uppercase text-brand-gold tracking-[0.2em] mb-6 block border-b border-brand-gold/20 pb-2 w-fit">
                        {study.category} / #{study.id.padStart(3, '0')}
                     </span>
                     <h3 className="text-2xl font-heading font-bold mb-6 text-brand-deepBlue leading-tight">{study.title}</h3>
                     <p className="text-sm text-brand-mutedGray mb-10 flex-grow leading-relaxed">
                        <span className="text-brand-deepBlue font-bold block mb-2">Outcome:</span>
                        {study.result}
                     </p>
                     <div className="flex justify-between items-end mt-auto pt-8 border-t border-gray-50">
                        <div className="space-y-1">
                          {study.metrics.slice(0, 1).map(m => (
                            <div key={m.label}>
                              <p className="text-brand-emerald font-bold text-2xl tracking-tighter">{m.value}</p>
                              <p className="text-[9px] uppercase font-black text-brand-mutedGray/50 tracking-widest">{m.label}</p>
                            </div>
                          ))}
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;