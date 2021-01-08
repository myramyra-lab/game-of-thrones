import React from 'react';
import logo from '../../img/got-title.webp';

const Header = () => {
    return (
        <div>
            <h1 className = "headerh1">Game of Thrones Characters</h1>
            <header className = "center">
                <br/>
                <img src={logo} alt=""/>
            </header>
        </div>
        
    )
}

export default Header;
