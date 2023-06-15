import React from 'react';
import stylesCont from "../estilos/TotalRevenue.module.css"
import LineChart from '../Charts/LineChart';

const TotalRevenueMetric = ({ totalRevenue }) => (
  <article className={stylesCont.cont}>
    <section className={stylesCont.section} id='GananciaTotal'>
      <h3>Total Ganancia</h3>
      <p>{`$${totalRevenue.toFixed(2)}`}</p>
      <LineChart/>
    </section>
  </article>
);

export default TotalRevenueMetric;
