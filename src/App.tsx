import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  Hero,
  Services,
  AboutUs,
  Furnitures,
  WhoWeAre,
  Projects,
  Clients,
  ContactUs,
  Footer,
  ButtonToTop,
} from 'components';

function App() {
  const [googleID, setGoogleID] = useState('');

  useEffect(() => {
    const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;
    setGoogleID(REACT_APP_GOOGLE_CLIENT_ID!);
  }, []);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={googleID}>
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
