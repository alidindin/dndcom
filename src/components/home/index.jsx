import React from 'react';

import Banner from '../banner';
import MainMiddle from '../mainMiddle';
import Contact from '../contact';
import TestValidation from '../testValidation';
import Footer from '../footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <MainMiddle />
      <Contact />
      <TestValidation />
      <Footer />
    </div>
  );
};

export default Home;
