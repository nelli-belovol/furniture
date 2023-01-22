import React, { useEffect, useRef, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Furnitures from './components/Furnitures/Furnitures';
import Projects from './components/Projects/Projects';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Clients from './components/Clients/Clients';

import ContactUs from './components/ContactUs/ContactUs';

import Footer from './components/Footer/Footer';
import ButtonToTop from 'components/ButtonToTop/ButtonToTop';

function App() {
  const [googleID, setGoogleID] = useState('');

  useEffect(() => {
    const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;
    setGoogleID(REACT_APP_GOOGLE_CLIENT_ID!);
  }, []);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="48186051441-ips11drdmf9n22t179bb42j7145if93a">
        <Hero />
        <Services />
        <AboutUs />
        <Furnitures />
        <WhoWeAre />
        <Projects />
        <Clients />
        <ContactUs />
        <Footer />
        <ButtonToTop />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
