import React from 'react';

const AveragePriceMetric = ({ averagePrice }) => (
    <article>
        <section>
            <h3>Precio Promedio</h3>
            <p>{`$${averagePrice.toFixed(2)}`}</p>
        </section>
    </article>

);

export default AveragePriceMetric;
