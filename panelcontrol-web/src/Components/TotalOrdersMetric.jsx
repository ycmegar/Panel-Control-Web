import React from 'react';
import stylesCont from "../estilos/Main.module.css"

const TotalOrdersMetric = ({ totalOrders }) => (
  <section className={stylesCont.sectionp2}>
    <h3>Total Órdenes</h3>
    <p>{totalOrders}</p>
  </section>
);

export default TotalOrdersMetric;
