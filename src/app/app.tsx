import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Header } from './header/header.component';

import { theme } from '../common/styles/theme';
import './app.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
