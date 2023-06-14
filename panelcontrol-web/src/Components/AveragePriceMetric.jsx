import React from 'react';
import stylesCont from "../estilos/Main.module.css"

const AveragePriceMetric = ({ averagePrice }) => (
    <section className={stylesCont.sectionp2}>
    <h3>Precio Promedio</h3>
    <p>{`$${averagePrice.toFixed(2)}`}</p>
    </section>
    
    
);

export default AveragePriceMetric;
