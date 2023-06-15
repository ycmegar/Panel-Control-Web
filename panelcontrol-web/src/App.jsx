import React from 'react';
import MetricsPanel from './Components/MetricsPanel';
import MetricsProvider from './Provider/MetricsProvider';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <MetricsProvider>
      <section>
        <MetricsPanel />
      </section>
    </MetricsProvider>
    <Footer/>
    </>
  );
};

export default App;
