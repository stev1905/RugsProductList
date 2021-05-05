import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-title"><h1>Rugs USA - Product List</h1></div>     

            <div className="toggle">
                <button className="reset-btn" onClick={props.resetFilter}>Reset Filter</button>
                <i onClick={props.togglePanel} class="fa fa-filter"></i>
            </div>
        </div>
    )
}

export default Header;