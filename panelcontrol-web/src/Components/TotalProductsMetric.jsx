import React from 'react';
import stylesCont from "../estilos/TotalProducts.module.css"

const TotalProductsMetric = ({ totalProducts }) => (
  <article className={stylesCont.cont}>
    <section className={stylesCont.section} id='ProductosTotal'>
      <h3>Total Productos</h3>
      <p>{totalProducts}</p>
    </section>
  </article>
);

export default TotalProductsMetric;
