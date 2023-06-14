import React from 'react';
import stylesCont from "../estilos/Main.module.css"

const TotalRevenueMetric = ({ totalRevenue }) => (
  <section className={stylesCont.sectionp}>
    <h3>Total Ganancia</h3>
    <p>{`$${totalRevenue.toFixed(3)}`}</p>
  </section>
);

export default TotalRevenueMetric;
