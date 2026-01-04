import React from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Brain, 
  Award, 
  Cpu, 
  Mail, 
  BarChart4,
  CheckCircle2,
  ChevronRight,
  Film,
  Search,
  Globe,
  Landmark
} from 'lucide-react';

const Careers: React.FC = () => {
  const values = [
    {
      title: "Strong Analytics",
      desc: "Problem-solving capabilities rooted in data.",
      icon: <Brain size={24} />
    },
    {
      title: "Structured Thinking",
      desc: "Precise communication and clear frameworks.",
      icon: <BarChart4 size={24} />
    },
    {
      title: "Professional Integrity",
      desc: "Absolute confidentiality and ethical conduct.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "High Responsibility",
      desc: "Thriving in fast-evolving environments.",
      icon: <Award size={24} />
    }
  ];

  const opportunities = [
    { 
      label: "Business Strategy & Consulting", 
      icon: <Briefcase size={20} className="text-brand-gold" /> 
    },
    { 
      label: "Political Advisory, Research & Intelligence", 
      icon: <Landmark size={20} className="text-brand-gold" /> 
    },
    { 
      label: "Entertainment Analytics & Market Insights", 
      icon: <Film size={20} className="text-brand-gold" /> 
    },
    { 
      label: "Data Analytics, AI & Predictive Modeling", 
      icon: <Cpu size={20} className="text-brand-gold" /> 
    },
    { 
      label: "Surveys, Field Research & Operations (CATI / CAPI)", 
      icon: <Search size={20} className="text-brand-gold" /> 
    },
    { 
      label: "Digital Strategy, Communications & Growth", 
      icon: <Globe size={20} className="text-brand-gold" /> 
    }
  ];

  const benefits = [
    "High-impact consulting assignments with real-world visibility",
    "A merit-driven, performance-oriented professional culture",
    "Exposure to senior decision-makers and complex problem statements",
    "Competitive compensation aligned with responsibility and expertise",
    "A respectful, inclusive, and integrity-led workplace"
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-paper/50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <header className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-deepBlue mb-8 tracking-tighter">
            Careers at <span className="text-brand-gold">EMOSCEPT.</span>
          </h1>
          <p className="text-3xl font-heading font-bold text-brand-deepBlue/80 mb-8 italic">
            Shaping Decisions. Driving Outcomes.
          </p>
          <div className="h-1 w-24 bg-brand-gold mb-10"></div>
          <p className="text-xl text-brand-mutedGray font-light leading-relaxed">
            EMOSCEPT is a consulting firm operating across Business Consulting, Political Consulting, and Entertainment Analytics. We partner with organizations, leaders, and institutions to deliver strategy, intelligence, and data-driven insights that influence critical decisions and real-world outcomes.
          </p>
        </header>

        {/* Why EMOSCEPT */}
        <section className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="bg-brand-deepBlue text-white p-12 shadow-2xl rounded-sm relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <TrendingUp size={160} />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-8 relative z-10">Why EMOSCEPT</h2>
            <p className="text-brand-paper/70 leading-relaxed mb-6 relative z-10">
              At EMOSCEPT, you will work on complex, high-stakes engagements that shape markets, governance, public opinion, and cultural ecosystems. We foster a professional environment where clarity of thought, ethical conduct, and execution excellence are non-negotiable.
            </p>
            <p className="text-brand-paper/70 leading-relaxed relative z-10">
              Our teams benefit from cross-domain exposure, allowing consultants and analysts to develop a holistic understanding of business dynamics, political strategy, and entertainment economics—an experience rarely offered within traditional consulting structures.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-heading font-bold text-brand-deepBlue mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
              <div className="w-8 h-px bg-brand-gold"></div>
              What are we looking for
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-brand-gold transition-all group shadow-sm">
                  <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deepBlue mb-2">{val.title}</h3>
                  <p className="text-sm text-brand-mutedGray">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas of Opportunity & What we offer */}
        <section className="grid lg:grid-cols-5 gap-12 mb-32">
          <div className="lg:col-span-3">
             <h2 className="text-2xl font-heading font-bold text-brand-deepBlue mb-10 flex items-center gap-3">
               <div className="w-8 h-px bg-brand-gold"></div>
               Areas of Opportunity
             </h2>
             <div className="grid gap-4">
               {opportunities.map((opp, idx) => (
                 <div key={idx} className="bg-white p-6 border-l-4 border-brand-paper hover:border-brand-gold hover:shadow-lg transition-all flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-4">
                      <span className="p-2 bg-brand-paper rounded-sm group-hover:bg-brand-deepBlue group-hover:text-white transition-colors duration-300">
                        {opp.icon}
                      </span>
                      <span className="text-brand-deepBlue font-medium">{opp.label}</span>
                    </div>
                    <ChevronRight className="text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
                 </div>
               ))}
             </div>
          </div>

          <div className="lg:col-span-2">
             <div className="bg-brand-jade text-white p-10 rounded-sm h-full">
               <h2 className="text-xl font-heading font-bold text-brand-gold mb-8 uppercase tracking-widest">What We Offer</h2>
               <ul className="space-y-6">
                 {benefits.map((benefit, idx) => (
                   <li key={idx} className="flex gap-4 group">
                      <CheckCircle2 size={20} className="text-brand-gold shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <span className="text-brand-paper/80 text-sm leading-relaxed">{benefit}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </section>

        {/* Join EMOSCEPT CTA */}
        <section className="bg-white border border-gray-100 p-12 md:p-20 text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-brand-deepBlue mb-8">Join EMOSCEPT</h2>
            <p className="text-xl text-brand-mutedGray mb-12 font-light">
              If you seek a consulting career defined by rigor, responsibility, and relevance, EMOSCEPT offers an environment where your work directly influences outcomes across business, politics, and entertainment.
            </p>
            <a 
              href="mailto:careers@emoscept.com"
              className="inline-flex items-center gap-4 bg-brand-deepBlue text-white px-10 py-5 font-bold hover:bg-brand-gold hover:text-brand-deepBlue transition-all shadow-xl group"
            >
              <Mail size={20} />
              Careers Enquiries: careers@emoscept.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;