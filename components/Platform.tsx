
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  BarChart4, 
  ClipboardList, 
  Target, 
  BrainCircuit, 
  Layers, 
  PhoneCall,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

/**
 * Interface for TechServiceCard props to ensure type safety.
 */
interface TechServiceCardProps {
  title: string;
  description: string;
  techniques: string;
  icon: any;
}

/**
 * Component representing a specific technical service offering.
 * Using React.FC ensures common React props like 'key' are correctly handled.
 */
const TechServiceCard: React.FC<TechServiceCardProps> = ({ title, description, techniques, icon: Icon }) => (
  <div className="bg-white p-8 border border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-500 group flex flex-col h-full rounded-sm">
    <div className="mb-6 p-3 bg-brand-paper w-fit rounded-sm text-brand-gold group-hover:bg-brand-deepBlue group-hover:text-white transition-colors duration-500">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-heading font-bold text-brand-deepBlue mb-4 group-hover:text-brand-gold transition-colors">{title}</h3>
    <p className="text-brand-mutedGray text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <div className="pt-6 border-t border-gray-50">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-3">Techniques</p>
      <p className="text-xs text-brand-mutedGray/80 leading-relaxed italic">
        {techniques}
      </p>
    </div>
  </div>
);

const Platform: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      description: "We design and develop high-performance websites that are visually refined, secure, and conversion-focused.",
      techniques: "Responsive design, modern front-end frameworks, SEO-optimized architecture, performance tuning, and secure backend integrations.",
      icon: Globe
    },
    {
      title: "Application Development",
      description: "We build robust mobile and web applications tailored to business workflows and user needs.",
      techniques: "Agile development, cross-platform frameworks, API-driven architecture, cloud deployment, and rigorous testing.",
      icon: Smartphone
    },
    {
      title: "AI Chatbots",
      description: "We create intelligent conversational systems that enhance customer engagement and operational efficiency.",
      techniques: "Natural Language Processing (NLP), intent recognition, contextual learning, multilingual support, and system integrations.",
      icon: Bot
    },
    {
      title: "Data Analytics",
      description: "We transform raw data into actionable insights that support strategic decision-making.",
      techniques: "Data cleaning, exploratory analysis, dashboarding, statistical modeling, and real-time reporting.",
      icon: BarChart4
    },
    {
      title: "CATI / CAPI Surveys",
      description: "We deliver structured, reliable primary research through computer-assisted survey methodologies.",
      techniques: "Questionnaire design, sampling strategy, real-time data validation, enumerator training, and quality checks.",
      icon: ClipboardList
    },
    {
      title: "AI-Driven Advertising",
      description: "We design and execute performance-focused advertising campaigns powered by artificial intelligence.",
      techniques: "Audience segmentation, creative optimization, predictive targeting, A/B testing, and real-time performance optimization.",
      icon: Target
    },
    {
      title: "Predictive Analysis",
      description: "We help organizations anticipate outcomes and reduce uncertainty through data-backed forecasting.",
      techniques: "Machine learning models, historical data modeling, trend analysis, scenario simulations, and continuous model refinement.",
      icon: BrainCircuit
    },
    {
      title: "Web Scraping",
      description: "We enable structured data collection from multiple online sources at scale for deep market intelligence.",
      techniques: "Automated crawlers, API integrations, data normalization, compliance-driven scraping, and secure data storage.",
      icon: Layers
    },
    {
      title: "IVRS Solutions",
      description: "We deploy scalable IVRS solutions for outreach, feedback collection, and automated communication.",
      techniques: "Voice workflow design, multilingual voice engines, call routing logic, real-time analytics, and CRM integrations.",
      icon: PhoneCall
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-paper/30">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <header className="max-w-4xl mb-24">
          <div className="inline-block px-4 py-1.5 bg-brand-deepBlue text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Digital Transformation & Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-deepBlue mb-8 tracking-tighter">
            The Platform <span className="text-brand-gold">&</span> Tech.
          </h1>
          <p className="text-2xl text-brand-deepBlue font-light leading-relaxed mb-10">
            We specialize in building intelligent, scalable, and data-driven digital solutions that help organizations make better decisions, improve efficiency, and achieve measurable outcomes.
          </p>
          <div className="flex items-center gap-3 text-brand-mutedGray">
            <ShieldCheck className="text-brand-emerald" size={20} />
            <span className="text-sm font-medium tracking-wide">Strategic and execution-focused approach.</span>
          </div>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <TechServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Approach / Footer Section */}
        <div className="bg-brand-deepBlue text-white p-16 rounded-sm relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-4">
              Our Approach
              <div className="h-px flex-grow bg-brand-gold/30"></div>
            </h2>
            <p className="text-xl text-brand-paper/80 leading-relaxed font-light mb-10">
              Across every service, we combine technology, analytics, and strategy to deliver solutions that are <span className="text-brand-gold font-bold">reliable, measurable,</span> and aligned with real-world business objectives.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="space-y-1">
                <p className="text-brand-gold font-bold text-3xl">100%</p>
                <p className="text-[10px] uppercase font-bold text-brand-paper/40 tracking-widest">Data Privacy</p>
              </div>
              <div className="space-y-1">
                <p className="text-brand-gold font-bold text-3xl">99.9%</p>
                <p className="text-[10px] uppercase font-bold text-brand-paper/40 tracking-widest">System Uptime</p>
              </div>
              <div className="space-y-1">
                <p className="text-brand-gold font-bold text-3xl">24/7</p>
                <p className="text-[10px] uppercase font-bold text-brand-paper/40 tracking-widest">Ops Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
