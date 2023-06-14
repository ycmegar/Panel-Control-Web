import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/total-products">Total Products</Link>
          </li>
          <li>
            <Link to="/total-orders">Total Orders</Link>
          </li>
          <li>
            <Link to="/total-revenue">Total Revenue</Link>
          </li>
          <li>
            <Link to="/average-price">Average Price</Link>
          </li>
          <li>
            <Link to="/top-selling-products">Top Selling Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
