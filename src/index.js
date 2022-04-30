import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ThemeModeProvider from './components/ThemeModeProvider';
import App from './App';
import './index.css';
import ModalContextProvider from './components/ModalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeModeProvider>
    <ThemeProvider>
      <CssBaseline />
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ThemeProvider>
  </ThemeModeProvider>,
);
