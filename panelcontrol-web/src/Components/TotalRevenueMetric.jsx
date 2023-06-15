import React from 'react';
import stylesCont from "../estilos/TotalRevenue.module.css"

const TotalRevenueMetric = ({ totalRevenue }) => (
  <article className={stylesCont.cont}>
    <section className={stylesCont.section} id='GananciaTotal'>
      <h3>Total Ganancia</h3>
      <p>{`$${totalRevenue.toFixed(3)}`}</p>
    </section>
  </article>
);

export default TotalRevenueMetric;
