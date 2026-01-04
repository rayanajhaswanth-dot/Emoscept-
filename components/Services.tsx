import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, PlayCircle, ShieldCheck, Zap, BarChart4 } from 'lucide-react';

interface ServiceDetailProps {
  type: 'business' | 'political' | 'entertainment';
  onNavigate: (path: string) => void;
}

const Services: React.FC<ServiceDetailProps> = ({ type, onNavigate }) => {
  // CONFIGURATION: These URLs control the images in the "Impact Case Study" section.
  const content = {
    business: {
      title: "Business Consulting",
      subtitle: "Operationalizing Growth through Precision Strategy.",
      description: "In an era of hyper-competition, incremental growth is equivalent to stagnation. We partner with CEOs and GTM leads to re-engineer market approach, optimize supply chains for velocity, and build brand architectures that command premium positioning.",
      offerings: [
        "GTM & Positioning", "Performance Marketing", "Sales & Distribution",
        "Supply Chain Optimization", "Brand Architecture", "Product/Pricing Lab",
        "Market Intelligence", "Digital Transformation"
      ],
      deliverables: [
        "Full Operational Audit & KPI Framework",
        "Dynamic Intelligence Dashboard",
        "Quarterly Execution Roadmap",
        "Risk & Sensitivity Analysis Report"
      ],
      cta: "Request a 30-minute GTM Audit",
      accentIcon: <TrendingUp className="text-brand-gold w-12 h-12" />,
      caseTitle: "QSR Income Growth",
      caseDesc: "How we helped a QSR in stock management, and market approach by optimising their running costs.",
      caseMetric: "40%",
      caseMetricLabel: "Efficiency Gain",
      caseMetric2: "Active",
      caseMetricLabel2: "Strategy Status",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", 
      showImage: true
    },
    political: {
      title: "Political Consulting",
      subtitle: "Data, ground operations and narrative — scaled to win.",
      description: "Elections are won in the margins. We provide candidates and parties with a 360-degree war-room capability, combining boots-on-the-ground intelligence with sophisticated micro-segmentation models that track and influence voter sentiment in real-time.",
      offerings: [
        "Campaign Strategy", "Winning Strategy", "War Room Management",
        "Data, Tech and Survey", "Voter Mapping", "Geographical Analysis",
        "Social Media Strategy", "Media Strategy", "Opposition Counter Strategy",
        "Voter Research", "Micro-segmentation", "Ground Ops Management",
        "Candidate Branding", "Coalition Mapping", "Policy Lab", "Training & Capacity"
      ],
      deliverables: [
        "End to End Campaign Management",
        "Data-Driven Analysis and Strategies",
        "Narrative Building and Management",
        "Electioneering solutions"
      ],
      accentIcon: <Users className="text-brand-gold w-12 h-12" />,
      cta: "Book a Campaign Strategy Call",
      caseTitle: "Powering Leadership Through Insight and Execution",
      caseDesc: "Pan-India impact spanning 14 states. 150+ strategically executed campaigns reaching 100M+ citizens. Providing direct advisory to 5 Chief Ministers through advanced technology-led solutions.",
      caseMetric: "150+",
      caseMetricLabel: "Strategic Campaigns",
      caseMetric2: "5",
      caseMetricLabel2: "Chief Ministers",
      // Using a direct, high-quality URL for the Indian Parliament building matching the reference.
      imageSrc: "https://images.unsplash.com/photo-1611080626919-7cf5a969fc8f?q=80&w=1200&auto=format&fit=crop",
      showImage: true
    },
    entertainment: {
      title: "Entertainment Analytics",
      subtitle: "Predictive Engines for the Indian Screen.",
      description: "Content risk is manageable with the right data. Our proprietary engines analyze audience micro-segments and historical genre elasticity to provide studios with high-confidence opening weekend forecasts and talent-to-market compatibility scores.",
      offerings: [
        "Audience Segmentation", "Genre Classification", "Forecasting Models",
        "Talent Analytics", "Release Strategy", "Marketing Analytics",
        "Real-time Tracking", "Tech Stack Integration", "KPI Frameworks"
      ],
      deliverables: [
        "Opening Weekend Forecasting Models",
        "Audience Sentiment Architecture",
        "National Release Strategy Matrix",
        "Talent-to-Market Scoring Reports"
      ],
      accentIcon: <PlayCircle className="text-brand-gold w-12 h-12" />,
      cta: "Request a Forecast / Book Demo",
      caseTitle: "Predictive Analysis of Audience Footfall",
      caseDesc: "Analyzed historical theatre audience data and used machine learning models for high-accuracy sales and growth forecasting.",
      caseMetric: "80%",
      caseMetricLabel: "Forecast Accuracy",
      caseMetric2: "Active",
      caseMetricLabel2: "Strategy Status",
      imageSrc: "https://images.unsplash.com/photo-1517604401157-538e9663cfcc?q=80&w=1200&auto=format&fit=crop",
      showImage: true
    }
  }[type];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-12 flex items-center gap-6">
            <div className="p-4 bg-brand-gold/10 rounded-sm">
              {content.accentIcon}
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-deepBlue mb-2 tracking-tighter">{content.title}</h1>
              <p className="text-xl text-brand-gold font-bold tracking-tight uppercase">{content.subtitle}</p>
            </div>
          </div>
          
          <div className="mb-16 p-8 bg-brand-paper border-l-4 border-brand-gold italic">
            <p className="text-2xl text-brand-deepBlue font-light leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-20">
            {/* Core Capabilities */}
            <div className="lg:col-span-3 bg-white p-10 border border-gray-100 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-10 flex items-center gap-2">
                <ShieldCheck size={16} /> Core Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {content.offerings.map(offering => (
                  <li key={offering} className="flex items-start gap-3 text-brand-deepBlue font-medium text-sm group">
                    <CheckCircle2 className="text-brand-emerald flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" size={18} />
                    <span className="group-hover:translate-x-1 transition-transform">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Strategic Deliverables */}
            <div className="lg:col-span-2 bg-brand-deepBlue text-white p-10 rounded-sm flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BarChart4 size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-8">Strategic Deliverables</h3>
                <ul className="space-y-5 mb-12 text-brand-paper/70 font-mono text-sm">
                  {content.deliverables.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-brand-gold">[{String(index + 1).padStart(2, '0')}]</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => onNavigate('/contact')}
                className="w-full bg-brand-gold text-brand-deepBlue font-bold py-6 hover:bg-white transition-all flex items-center justify-center gap-3 group relative z-10 shadow-lg active:scale-[0.98]"
              >
                {content.cta} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Case Study Section (Contains the requested image update) */}
          <div className="border-t border-gray-200 pt-16">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center text-brand-gold rounded-full">
                <Zap size={20} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-brand-deepBlue">Impact Case Study</h3>
            </div>
            
            <div className="bg-white border border-gray-100 p-10 flex flex-col md:flex-row gap-12 items-center hover:shadow-xl transition-shadow duration-500">
              {content.showImage && (
                <div className="w-full md:w-2/5 h-80 bg-brand-paper rounded overflow-hidden shadow-inner flex items-center justify-center group shrink-0 border border-gray-100">
                  <img 
                    src={content.imageSrc} 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                    alt={`${content.title} Impact Visual`}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback in case of an external URL failure
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>
              )}
              <div className="flex-grow w-full">
                <div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-6">
                  Verified Outcome
                </div>
                <h4 className="text-3xl font-bold mb-6 text-brand-deepBlue leading-tight tracking-tight">{content.caseTitle}</h4>
                <p className="text-brand-mutedGray text-xl mb-10 leading-relaxed font-light">{content.caseDesc}</p>
                <div className="flex gap-16">
                  <div className="border-l-2 border-brand-emerald pl-8">
                    <p className="text-brand-emerald font-bold text-5xl mb-1 tracking-tighter">{content.caseMetric}</p>
                    <p className="text-[10px] uppercase font-bold text-brand-mutedGray tracking-[0.2em]">{content.caseMetricLabel}</p>
                  </div>
                  <div className="border-l-2 border-brand-gold pl-8">
                    <p className="text-brand-deepBlue font-bold text-5xl mb-1 tracking-tighter">{content.caseMetric2}</p>
                    <p className="text-[10px] uppercase font-bold text-brand-mutedGray tracking-[0.2em]">{content.caseMetricLabel2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;