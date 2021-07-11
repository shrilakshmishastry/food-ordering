import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useSelector,useDispatch,shallowEqual } from "react-redux";
import {getStoreById} from '../../store/action/stores';
import { addToCart} from '../../store/action/cart';

const StoreDetails = () =>{
    const params = useParams();
    const dispatch = useDispatch();


    const store = useSelector((state)=>{
        return state.store.selectedStore

    }, shallowEqual)
    console.log(store);
    React.useEffect(()=>{
        getStoreById(params.id)(dispatch);
    },[]);

    function addProductToCart(id){
        addToCart(id)(dispatch)   ;
    }

    return(
        <div>
               {store && store.products.map((product,index)=>{
                   return(
                    <div key={product.id} >
                           {product.name}
                           <button onClick={()=>addProductToCart(product.id)}>
                               Add to Cart
                           </button>
                       </div>

                   );

               })}
        </div>
    );
}
export default StoreDetails;