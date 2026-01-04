import React from 'react';
import { 
  Briefcase, 
  Users, 
  Film, 
  Search, 
  PenTool, 
  CheckCircle, 
  BarChart3,
  TrendingUp,
  Cpu,
  Mail, 
  Linkedin,
  Twitter,
  Globe,
  Home as HomeIcon,
  Info,
  Layers,
  Trophy,
  Lightbulb,
  UserPlus
} from 'lucide-react';
import { NavLink, ServiceTile, CaseStudy } from './types';

export interface NavLinkWithIcon extends NavLink {
  icon: React.ReactNode;
}

export const NAV_LINKS: NavLinkWithIcon[] = [
  { label: 'Home', path: '/', icon: <HomeIcon size={18} /> },
  { label: 'About', path: '/about', icon: <Info size={18} /> },
  { label: 'Services', path: '/services', icon: <Layers size={18} /> },
  { label: 'Case Studies', path: '/impact', icon: <Trophy size={18} /> },
  { label: 'Platform & Tech', path: '/platform', icon: <Cpu size={18} /> },
  { label: 'Insights', path: '/insights', icon: <Lightbulb size={18} /> },
  { label: 'Careers', path: '/careers', icon: <UserPlus size={18} /> },
  { label: 'Contact', path: '/contact', icon: <Mail size={18} /> },
];

export const SERVICES: ServiceTile[] = [
  {
    title: 'Business Consulting',
    offerings: ['GTM & Positioning', 'Performance Marketing', 'Supply Chain Optimization', 'Tech Solutions'],
    stat: '25% avg. revenue growth',
    path: '/services/business',
    icon: <Briefcase className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Political Consulting',
    offerings: [
      'Campaign & Winning Strategy',
      'War Room Management',
      'Data, Tech and Survey',
      'Social Media & Media Strategy'
    ],
    stat: '85% win rate',
    path: '/services/political',
    icon: <Users className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Entertainment Analytics',
    offerings: ['Audience Segmentation', 'Box Office Forecasting', 'Talent Scorecards', 'Release Strategy'],
    stat: '92% forecasting accuracy',
    path: '/services/entertainment',
    icon: <Film className="w-8 h-8 text-brand-gold" />
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    category: 'Entertainment',
    title: 'Blockbuster Forecasting',
    challenge: 'A major studio needed to optimize a $150M tentpole release across 40 markets.',
    approach: 'Deployed ensemble XGBoost models integrating social sentiment and historical market elasticity.',
    result: 'Optimized screen allocation, increasing national opening weekend by 14%.',
    metrics: [{ label: 'ROI Improvement', value: '14%' }, { label: 'Markets', value: '40+' }]
  },
  {
    id: '2',
    category: 'Political',
    title: 'Powering Leadership Through Insight',
    challenge: 'Strategic advisory across 14 states with complex demographics.',
    approach: 'Advanced data analytics and tech-led campaign movements.',
    result: 'Reaching 100M+ citizens and providing direct advisory to 5 Chief Ministers.',
    metrics: [{ label: 'Campaigns', value: '150+' }, { label: 'Citizens Reached', value: '100M+' }]
  },
  {
    id: '3',
    category: 'Business',
    title: 'Revenue Growth and Supply Chain Optimization',
    challenge: 'Logistics bottleneck during peak festive season.',
    approach: 'Real-time supply chain predictive modeling and distribution rerouting.',
    result: 'Reduced delivery delays by 40% while maintaining margin.',
    metrics: [{ label: 'Delay Reduction', value: '40%' }, { label: 'Cost Savings', value: '$2.1M' }]
  }
];

export const APPROACH_STEPS = [
  { title: 'Discover', desc: 'Deep-dive data collection and stakeholder alignment.', icon: <Search className="w-6 h-6" /> },
  { title: 'Design', desc: 'Custom strategic frameworks and predictive models.', icon: <PenTool className="w-6 h-6" /> },
  { title: 'Deliver', desc: 'Operational execution and real-time intervention.', icon: <CheckCircle className="w-6 h-6" /> },
  { title: 'Decode', desc: 'Post-mortem analysis and scaling insights.', icon: <BarChart3 className="w-6 h-6" /> }
];

export const PROBLEMS = [
  { problem: 'Stagnant Market Share?', solution: 'Aggressive GTM Pivot' },
  { problem: 'Inaccurate Forecasting?', solution: 'Predictive Analysis & Data Driven Approach' },
  { problem: 'Operational Friction?', solution: 'Supply Chain Sync' },
  { problem: 'Voter Disengagement?', solution: 'Micro-segmentation Strategy' }
];

export const STATS = [
  { label: 'Years of Expertise', value: '9+' },
  { label: 'Strategic Campaigns', value: '100+' },
  { label: 'Clients Served', value: '80+' },
  { label: 'Avg. Client ROI', value: '2.5x' }
];

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EMOSCEPT",
  "url": "https://emoscept.com",
  "logo": "https://emoscept.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9966890704",
    "contactType": "customer service",
    "email": "emoscept@gmail.com"
  },
  "description": "EMOSCEPT combines creative marketing, analytics and execution to deliver measurable outcomes for business, political and entertainment leaders."
};