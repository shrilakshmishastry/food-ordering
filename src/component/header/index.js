import React from 'react';
import Menu from '../menu';
import Location from '../location';
import Logo from '../logo';
import Search from '../search';
import Cart from '../cart';
import {useSelector} from 'react-redux';




const Header = () =>{
    const state = useSelector(state=>state.user.info);

    return(
        <header className="main-header d-flex justify-content-between">

            <Menu/>
            <Location/>
            <Logo/>
            <Search/>
            <Cart/>
            <p>{state.email}</p>
        </header>
    );
}
export default Header;