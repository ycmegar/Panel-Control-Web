import React from 'react';

const AveragePriceMetric = ({ averagePrice }) => (
    <section>
        <h3>Precio Promedio</h3>
        <p>{`$${averagePrice.toFixed(2)}`}</p>
    </section>
);

export default AveragePriceMetric;
