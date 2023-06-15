import React, { useContext } from 'react';
import MetricsContext from '../Context/MetricsContext';
import TotalProductsMetric from './TotalProductsMetric';
import TotalOrdersMetric from './TotalOrdersMetric';
import TotalRevenueMetric from './TotalRevenueMetric';
import AveragePriceMetric from './AveragePriceMetric';
import TopSellingProductsMetric from './TopSellingProductsMetric';
import Style from  '../estilos/Main.module.css'

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
    return <p className={Style.loading}><span className="fa-solid fa-spinner" alt="logo CP" id="logo">Cargando...</span></p>;
  }

  return (
    <section>
      <h2 className={Style.display}>Métricas</h2>
      <TotalProductsMetric totalProducts={totalProducts} />
      <TotalOrdersMetric totalOrders={totalOrders} />
      <TotalRevenueMetric totalRevenue={totalRevenue} />
      <AveragePriceMetric averagePrice={averagePrice} />
      <TopSellingProductsMetric topSellingProducts={topSellingProducts} />
    </section>
  );
};

export default MetricsPanel;
