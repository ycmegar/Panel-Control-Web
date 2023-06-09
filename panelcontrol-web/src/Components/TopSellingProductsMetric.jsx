import React from 'react';

const TopSellingProductsMetric = ({ topSellingProducts }) => (
  <section>
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
