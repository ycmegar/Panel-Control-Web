import React from 'react';
import MetricsPanel from './Components/MetricsPanel';
import MetricsProvider from './Provider/MetricsProvider';
import Header from './Components/Header';

const App = () => {
  return (
    <>
    <Header/>
    <MetricsProvider>
      <section>
        <MetricsPanel />
      </section>
    </MetricsProvider>
    </>
  );
};

export default App;
