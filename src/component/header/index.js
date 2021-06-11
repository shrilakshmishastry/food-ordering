import React from 'react';
import Menu from '../menu';
import Location from '../location';
import Logo from '../logo';
import Search from '../search';
import Cart from '../cart';




const Header = () =>{
    return(
        <header className="main-header d-flex justify-content-between">
            <Menu/>
            <Location/>
            <Logo/>
            <Search/>
            <Cart/>
        </header>
    );
}
export default Header;