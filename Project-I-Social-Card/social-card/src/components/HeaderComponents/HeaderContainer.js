import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";


function HeaderContainer() {
    return (
        <header>
            <ImageThumbnail />
            <div className="header-content">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
};

export default HeaderContainer;