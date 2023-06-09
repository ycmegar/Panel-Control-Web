import React, { createContext, useState, useEffect } from 'react';

export const MetricsContext = createContext();

export const MetricsProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsResponse = await fetch(
        'https://fakestoreapi.com/products'
      );
      const productsData = await productsResponse.json();
      const totalProducts = productsData.length;
      setTotalProducts(totalProducts);

      const ordersResponse = await fetch('https://fakestoreapi.com/carts');
      const ordersData = await ordersResponse.json();
      const totalOrders = ordersData.length;
      setTotalOrders(totalOrders);

      let totalRevenue = 0;
      let totalPrice = 0;

      ordersData.forEach((order) => {
        order.products.forEach((product) => {
          totalRevenue += product.price;
          totalPrice += product.price;
        });
      });

      setTotalRevenue(totalRevenue);
      setAveragePrice(totalPrice / totalProducts);

      const productsMap = {};

      ordersData.forEach((order) => {
        order.products.forEach((product) => {
          if (productsMap[product.id]) {
            productsMap[product.id].count++;
          } else {
            productsMap[product.id] = {
              id: product.id,
              title: product.title,
              count: 1,
            };
          }
        });
      });

      const topSellingProducts = Object.values(productsMap).sort(
        (a, b) => b.count - a.count
      );

      setTopSellingProducts(topSellingProducts);

      setLoading(false);
    } catch (error) {
      console.error('Error cargando datos:', error);
    }
  };

  return (
    <MetricsContext.Provider
      value={{
        totalProducts,
        totalOrders,
        totalRevenue,
        averagePrice,
        topSellingProducts,
        loading,
      }}
    >
      {children}
    </MetricsContext.Provider>
  );
};
