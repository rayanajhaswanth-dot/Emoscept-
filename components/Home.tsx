
import React from 'react';
import { ArrowRight, ChevronRight, BarChart3, Users2, Database, Zap, HelpCircle, CheckCircle2 } from 'lucide-react';
import { SERVICES, PROBLEMS, APPROACH_STEPS, STATS, CASE_STUDIES } from '../constants';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-12 overflow-hidden gradient-hero">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <div className="inline-block px-5 py-2 mb-10 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-[0.3em] rounded-full shadow-lg backdrop-blur-sm">
              Result Oriented Strategy & Analytics
            </div>
            
            <h1 className="text-5xl md:text-[92px] font-heading font-bold text-white mb-12 leading-none tracking-tighter">
              <span className="block">Street-Smart Strategy.</span>
              <span className="block text-brand-gold mt-10 md:mt-12">Data-Driven Impact.</span>
            </h1>

            <p className="text-xl md:text-3xl text-brand-paper font-sans font-normal mb-14 leading-relaxed max-w-4xl mx-auto opacity-90">
              EMOSCEPT blends creative marketing, advanced analytics and operational execution for Business, Political & Entertainment leaders.
            </p>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-2xl md:text-4xl text-white border-y border-brand-gold/40 py-12 px-8 font-sans font-light leading-relaxed shadow-xl bg-white/5 backdrop-blur-md rounded-sm">
                <span className="opacity-80">We move the needle where it matters most:</span> <br className="hidden md:block" />
                <span className="text-brand-gold font-bold italic block mt-6 drop-shadow-md">Voter sentiment, box office revenue, and corporate market dominance.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onNavigate('/contact')}
                className="px-14 py-6 bg-brand-gold text-brand-deepBlue font-bold text-xl hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                Talk to an Expert <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-paper py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-mutedGray mb-10">
            Trusted by leaders across Business, Politics & Entertainment
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
            {['EMERGING BRANDS', '100+ POLITICIANS', 'CELEBRITIES', 'PRODUCERS GUILD'].map(logo => (
              <span key={logo} className="text-xl md:text-2xl font-heading font-black tracking-tighter text-brand-deepBlue">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-deepBlue mb-6 leading-tight">Precision over Luck.</h2>
            <p className="text-brand-mutedGray text-2xl leading-relaxed font-light">We identify systemic friction and replace it with high-velocity strategic flow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROBLEMS.map((item, idx) => (
              <div key={idx} className="flex flex-col p-10 border border-gray-100 bg-brand-paper/20 hover:bg-white hover:border-brand-gold hover:shadow-2xl transition-all duration-300 group rounded-sm">
                {/* Question Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4 text-brand-mutedGray/40">
                    <HelpCircle size={20} className="group-hover:text-brand-gold transition-colors" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">The Obstacle</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-deepBlue leading-tight italic opacity-90 group-hover:opacity-100 transition-opacity">
                    "{item.problem}"
                  </h3>
                </div>

                <div className="w-16 h-1 bg-brand-gold/20 mb-10 group-hover:w-full transition-all duration-700"></div>

                {/* Solution Section */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4 text-brand-emerald">
                    <CheckCircle2 size={20} />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">EMOSCEPT Solution</span>
                  </div>
                  <p className="text-xl font-bold text-brand-deepBlue leading-snug group-hover:text-brand-emerald transition-colors">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4D Approach */}
      <section className="py-24 bg-brand-deepBlue text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The 4D Methodology</h2>
            <p className="text-brand-paper/60">Our operational blueprint for consistent, measurable outcomes.</p>
          </div>
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0"></div>
            
            <div className="grid lg:grid-cols-4 gap-12">
              {APPROACH_STEPS.map((step, idx) => (
                <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-brand-deepBlue border-2 border-brand-gold rounded-full flex items-center justify-center mb-6 text-brand-gold shadow-[0_0_30px_rgba(201,163,74,0.2)] hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-brand-paper/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-brand-paper">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-deepBlue mb-4">Specialized Excellence.</h2>
              <p className="text-brand-mutedGray text-lg">Modular services designed for specific leadership challenges.</p>
            </div>
            <button 
              onClick={() => onNavigate('/services')}
              className="text-brand-gold font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Explore All Services <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-brand-gold flex flex-col">
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-brand-deepBlue mb-6">{service.title}</h3>
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.offerings.map(o => (
                    <li key={o} className="flex items-center gap-3 text-brand-mutedGray text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-brand-mutedGray uppercase font-bold tracking-widest mb-1">Impact Metric</p>
                    <p className="text-brand-emerald font-bold">{service.stat}</p>
                  </div>
                  <button 
                    onClick={() => onNavigate(service.path)}
                    className="p-2 rounded-full border border-gray-100 text-brand-deepBlue hover:bg-brand-deepBlue hover:text-white transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-jade text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {STATS.map(stat => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-heading font-bold mb-2 text-brand-gold">{stat.value}</p>
                <p className="text-xs uppercase font-bold tracking-widest text-brand-paper/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Snapshot Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-deepBlue mb-4">Strategic Impact</h2>
            <p className="text-brand-mutedGray">Real outcomes for high-stakes projects.</p>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
            {CASE_STUDIES.map(study => (
              <div key={study.id} className="min-w-[320px] md:min-w-[450px] bg-brand-paper p-8 snap-start border-l-4 border-brand-deepBlue">
                <span className="inline-block px-3 py-1 bg-brand-deepBlue text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                  {study.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-brand-deepBlue mb-4">{study.title}</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-sm"><span className="font-bold text-brand-deepBlue">Challenge:</span> <span className="text-brand-mutedGray">{study.challenge}</span></p>
                  <p className="text-sm"><span className="font-bold text-brand-deepBlue">Approach:</span> <span className="text-brand-mutedGray">{study.approach}</span></p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map(m => (
                    <div key={m.label} className="bg-white p-4">
                      <p className="text-[10px] text-brand-mutedGray uppercase mb-1">{m.label}</p>
                      <p className="text-xl font-bold text-brand-emerald">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Consultation CTA */}
      <section className="py-20 bg-brand-deepBlue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-10 leading-tight">
            Ready to scale your <span className="text-brand-gold">Impact?</span>
          </h2>
          <button 
            onClick={() => onNavigate('/contact')}
            className="px-12 py-5 bg-brand-gold text-brand-deepBlue font-bold text-xl hover:bg-white transition-all shadow-2xl"
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
