import React, { useContext } from 'react';
import * as enData from './en_US.json';
import * as laData from './la_PG.json';

export const data = (lang: 'en' | 'la') => {
  switch (lang) {
    case 'en': {
      return (enData as any).default;
    }
    case 'la': {
      return (laData as any).default;
    }
    default: {
      return (enData as any).default;
    }
  }
}

export const languageContext = React.createContext(data('en'));

export const useData = () => {
  return useContext(languageContext);
}