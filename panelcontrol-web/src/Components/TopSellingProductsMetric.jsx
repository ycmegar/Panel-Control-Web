import React from 'react';
import stylesCont from "../estilos/TopSelling.module.css"

const TopSellingProductsMetric = ({ topSellingProducts }) => (
  <article className={stylesCont.contTop}>
    <section className={stylesCont.section} id='SectionBestSelling'>
      <h3>Top 5 Productos más Vendidos</h3>
      <ul>
        {topSellingProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.count} orders
          </li>
        ))}
      </ul>
    </section>
  </article>
);

export default TopSellingProductsMetric;
