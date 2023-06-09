import React from 'react';

const TotalRevenueMetric = ({ totalRevenue }) => (
  <section>
    <h3>Total Ganancia</h3>
    <p>{`$${totalRevenue}`}</p>
  </section>
);

export default TotalRevenueMetric;
