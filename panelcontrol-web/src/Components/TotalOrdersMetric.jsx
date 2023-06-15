import React from 'react';
import stylesCont from "../estilos/TotalOrders.module.css"

const TotalOrdersMetric = ({ totalOrders }) => (
  <article className={stylesCont.cont}>
    <section className={stylesCont.section} id='OrdenTotal'>
      <h3>Total Órdenes</h3>
      <p>{totalOrders}</p>
    </section>
  </article>
);

export default TotalOrdersMetric;
