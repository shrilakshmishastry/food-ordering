import React from 'react';
import SearchListing from '../../pages/search-listing';
import { Switch, Route } from 'react-router-dom';
import StoreDetails from '../../pages/store-details';
import NotFound from '../../pages/not-found';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/">
                <div>Home page</div>
            </Route>

            <Route exact path="/search">
                <SearchListing />
            </Route>
            <Route path="/search/store/:id">
                <StoreDetails />
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    );
}
export default Content;