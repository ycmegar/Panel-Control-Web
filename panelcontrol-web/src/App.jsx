import React from 'react';
import MetricsPanel from './Components/MetricsPanel';
import MetricsProvider from './Provider/MetricsProvider';

const App = () => {
  return (
    <MetricsProvider>
      <section>
        <MetricsPanel />
      </section>
    </MetricsProvider>
  );
};

export default App;
