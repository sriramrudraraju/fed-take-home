import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Header } from './header/header.component';
import { Content } from './content/content.component';

import { data, languageContext } from '../data';

import { theme } from '../common/styles/theme';
import './app.css';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'la'>('en');
  return (
    <ThemeProvider theme={theme}>
      <Header setLang={setLang}/>
      <languageContext.Provider value={data(lang)}>
        <Content />
      </languageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
