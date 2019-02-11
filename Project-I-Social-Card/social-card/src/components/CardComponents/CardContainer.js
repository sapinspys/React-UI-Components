import React from 'react';
import './Card.css';

function CardContainer() {
    return (
        <section className="card">
            <CardBanner />
            <CardContent />
        </section>
    );
}