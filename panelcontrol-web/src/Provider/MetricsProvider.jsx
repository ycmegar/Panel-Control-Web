import React, { useState, useEffect } from 'react';
import MetricsContext from '../Context/MetricsContext';

const MetricsProvider = ({ children }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await fetch('https://fakestoreapi.com/products');
        const productsData = await productsResponse.json();

        const cartsResponse = await fetch('https://fakestoreapi.com/carts');
        const cartsData = await cartsResponse.json();

        // Calculate totalProducts
        setTotalProducts(productsData.length);

        // Calculate totalOrders
        setTotalOrders(cartsData.length);

        // Calculate totalRevenue
        const revenue = cartsData.reduce((acc, cart) => {
          const totalPrice = cart.products.reduce((total, product) => {
            const productData = productsData.find((p) => p.id === product.productId);
            return total + productData.price * product.quantity;
          }, 0);
          return acc + totalPrice;
        }, 0);
        setTotalRevenue(revenue);

        // Calculate averagePrice
        const totalPrices = productsData.reduce((total, product) => total + product.price, 0);
        const average = totalPrices / productsData.length;
        setAveragePrice(average);

        // Calculate topSellingProducts
        const productsCountMap = cartsData.reduce((map, cart) => {
          cart.products.forEach((product) => {
            const productId = product.productId;
            if (map.has(productId)) {
              map.set(productId, map.get(productId) + 1);
            } else {
              map.set(productId, 1);
            }
          });
          return map;
        }, new Map());

        const sortedProducts = [...productsData].sort((a, b) => {
          const countA = productsCountMap.get(a.id) || 0;
          const countB = productsCountMap.get(b.id) || 0;
          return countB - countA;
        });

        setTopSellingProducts(sortedProducts.slice(0, 5));

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener métricas:', error);
      }
    };

    fetchData();
  }, []);

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

export default MetricsProvider;
