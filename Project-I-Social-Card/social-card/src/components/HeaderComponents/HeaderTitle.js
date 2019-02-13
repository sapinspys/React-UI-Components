import React from 'react';
import './Header.css';
import moment from "moment";

function HeaderTitle() {
    return (
        <p><strong>Lambda School</strong><span className="soft"> @LambdaSchool &middot; {moment().format("MMM Do")}  </span></p>
    );
};

export default HeaderTitle;