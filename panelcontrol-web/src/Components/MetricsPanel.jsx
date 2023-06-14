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
    return <p>Cargando...</p>;
  }

  return (
    <section>
      <h1 className={Style.header}><span className="fa-brands fa-cpanel"></span></h1>
      <p className={Style.Metricsect}><TotalProductsMetric totalProducts={totalProducts} /></p>
      <p className={Style.Metricsect}><TotalOrdersMetric totalOrders={totalOrders} /></p>
      <p className={Style.Metricsect}><TotalRevenueMetric totalRevenue={totalRevenue} /></p>
      <p className={Style.Metricsect}><AveragePriceMetric averagePrice={averagePrice} /></p>
      <p className={Style.Metricsect}><TopSellingProductsMetric topSellingProducts={topSellingProducts} /></p>
    </section>
  );
};

export default MetricsPanel;
