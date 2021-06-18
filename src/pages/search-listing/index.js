import React from 'react';
import {Heading,Text} from '../../component/ui';
import StoreCard from '../../component/store-card';
// import Stores from '../../;
import axios from 'axios';



const SearchListing = ()=>{
    const [stores,setStores] = React.useState([]);

    React.useEffect(()=>{
        axios.get('http://localhost:3600/stores')
        .then((res)=>{
            setStores(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

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
                            stores.map((store, index)=>{
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