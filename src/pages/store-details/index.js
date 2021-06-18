import axios from "axios";
import React from "react";
import { useParams } from "react-router";
const StoreDetails = () =>{
    const {id} = useParams();
    console.log(id);
    React.useEffect(()=>{
        axios.get(`http://localhost:3600/stores/${id}`)
        .then((res)=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    return(
        <div>
                Store details-{id}
        </div>
    );
}
export default StoreDetails;