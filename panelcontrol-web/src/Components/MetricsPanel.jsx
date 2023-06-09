import React, { useContext } from 'react';
import { MetricsContext } from '../Contexts/MetricsContext';
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
    <section>
      <h1>Panel de Control</h1>
      <TotalProductsMetric totalProducts={totalProducts} />
      <TotalOrdersMetric totalOrders={totalOrders} />
      <TotalRevenueMetric totalRevenue={totalRevenue} />
      <AveragePriceMetric averagePrice={averagePrice} />
      <TopSellingProductsMetric topSellingProducts={topSellingProducts} />
    </section>
  );
};

export default MetricsPanel;
