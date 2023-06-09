import React from 'react';
import MetricsPanel from './Components/MetricsPanel';
import { MetricsProvider } from './Contexts/MetricsContext';

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
