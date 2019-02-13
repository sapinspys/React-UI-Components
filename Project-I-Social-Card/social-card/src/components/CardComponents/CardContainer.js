import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function toReact() {
    window.open(`https://www.reactjs.org`);
};

function CardContainer() {
    return (
        <section className="card" onClick={toReact}>
            <CardBanner />
            <CardContent />
        </section>
    );
}

export default CardContainer;