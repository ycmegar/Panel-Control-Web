import React from 'react';
import MetricsPanel from '../src/Contexts/MetricsPanel';
import { MetricsProvider } from './Contexts/MetricsContext';

const App = () => {
  return (
    <MetricsProvider>
      <section>
        <h1>Panel de Control</h1>
        <MetricsPanel />
      </section>
    </MetricsProvider>
  );
};

export default App;
