import React from 'react';
import stylesCont from "../estilos/AveragePrice.module.css"
import BarChart from '../Charts/BarChart';

const AveragePriceMetric = ({ averagePrice }) => (
    <article className={stylesCont.cont}>
        <section className={stylesCont.section} id='PrecioPromedio'>
        <h3>Precio Promedio</h3>
        <p>{`$${averagePrice.toFixed(2)}`}</p>
        <BarChart/>
        </section>
    </article>
    
);

export default AveragePriceMetric;
