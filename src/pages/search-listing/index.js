import React from 'react';
import {Heading,Text} from '../../component/ui';
import StoreCard from '../../component/store-card';
import Stores from '../../mock/search-store';



const SearchListing = ()=>{
    return(
        <div className="search-listing">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Heading text="Search Results"/>
                        <Text text="170 stores"/>
                    </div>
                    <div className="col-9">
                        {
                            Stores.map((store, index)=>{
                                 return(
                                     <StoreCard store={store} key={store.id}/>
                                 );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchListing;