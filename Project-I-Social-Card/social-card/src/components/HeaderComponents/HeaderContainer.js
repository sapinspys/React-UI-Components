import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";


function HeaderContainer() {
    return (
        <div className='header-container'>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer;