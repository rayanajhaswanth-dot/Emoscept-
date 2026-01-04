
// Import React to provide access to the React namespace for type definitions.
import React from 'react';

export interface ServiceTile {
  title: string;
  offerings: string[];
  stat: string;
  path: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface NavLink {
  label: string;
  path: string;
}