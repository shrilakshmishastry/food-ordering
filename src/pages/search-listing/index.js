import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text } from '../../component/ui';
import StoreCard from '../../component/store-card';
import {getStore} from '../../store/action/stores.js';
// import Stores from '../../store/action/stores.js;
// import axios from 'axios';



const SearchListing = ({ stores, getStore, isLoading }) => {

    React.useEffect(() => {

        getStore();
    }, [])

    return (
        <div className="search-listing">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Heading text="Search Results" />
                        <Text text={stores.length} />
                    </div>
                    {
                        isLoading && <Heading text="Loading" />
                    }
                    {
                        !isLoading && <div className="col-9">
                            {
                               stores && stores.map((store, index) => {
                                    return (
                                        <StoreCard store={store} key={store.id} />
                                    );
                                })
                            }
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = function (state) {

    return {
        stores: state.store.list,
        isLoading: state.store.isLoading,
    }
}


export default connect(mapStateToProps, { getStore })(SearchListing);