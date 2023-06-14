import React from 'react';
import stylesCont from "../estilos/Main.module.css"

const TopSellingProductsMetric = ({ topSellingProducts }) => (
  <section className={stylesCont.sectionp} id='sectionBestSelling'>
    <h3>Top Productos más Vendidos</h3>
    <ul>
      {topSellingProducts.map((product) => (
        <li key={product.id}>
          {product.title} - {product.count} orders
        </li>
      ))}
    </ul>
  </section>
);

export default TopSellingProductsMetric;
