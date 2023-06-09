import React, { useContext } from 'react';
import { MetricsContext } from './MetricsContext';
import TotalProductsMetric from './TotalProductsMetric';
import TotalOrdersMetric from './TotalOrdersMetric';
import TotalRevenueMetric from './TotalRevenueMetric';
import AveragePriceMetric from './AveragePriceMetric';
import TopSellingProductsMetric from './TopSellingProductsMetric';

const MetricsPanel = () => {
  const {
    totalProducts,
    totalOrders,
    totalRevenue,
    averagePrice,
    topSellingProducts,
    loading,
  } = useContext(MetricsContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <article>
        <section>
        <TotalProductsMetric totalProducts={totalProducts} />
        <TotalOrdersMetric totalOrders={totalOrders} />
        <TotalRevenueMetric totalRevenue={totalRevenue} />
        <AveragePriceMetric averagePrice={averagePrice} />
        <TopSellingProductsMetric topSellingProducts={topSellingProducts} />
        </section>
    </article>
  );
};

export default MetricsPanel;
