import React from 'react';
import SearchListing from '../../pages/search-listing';
import { Switch, Route } from 'react-router-dom';
import StoreDetails from '../../pages/store-details';
import NotFound from '../../pages/not-found';
import AdminAddProduct from '../../pages/admin/add-products';
import LoginAuth from '../login-auth';
import AdminLogin from '../../pages/admin/login';
import {useDispatch} from 'react-redux';
import { getUserInfo } from '../../store/action/user';
import HomePage from '../../pages/home-page';

const Content = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        getUserInfo()(dispatch);
      },[]);
    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/search">
                <SearchListing />
            </Route>
            <Route path="/search/store/:id">
                <StoreDetails />
            </Route>
            <Route path="/admin/add-product">
                {/* <LoginAuth> */}
                <AdminAddProduct/>
                {/* </LoginAuth> */}
            </Route>
            <Route path="/admin/login">
                <AdminLogin/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    );
}
export default Content;