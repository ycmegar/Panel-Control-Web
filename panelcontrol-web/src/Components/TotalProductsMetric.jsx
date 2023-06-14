import React from 'react';
import stylesCont from "../estilos/Main.module.css"

const TotalProductsMetric = ({ totalProducts }) => (
  <section className={stylesCont.sectionp}>
    <h3>Total Productos</h3>
    <p>{totalProducts}</p>
  </section>
);

export default TotalProductsMetric;
