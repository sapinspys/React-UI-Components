import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";


function CardContainer() {
    return (
        <section className="card">
            <CardBanner />
            <CardContent />
        </section>
    );
}

export default CardContainer;