import '../styles/globals.css';
import { useState } from 'react';
import AppContext from '../components/AppContext';

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState(0);

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
