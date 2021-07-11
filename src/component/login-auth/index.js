import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function LoginAuth({children}){
    const isUserLoggedIn = window.localStorage.getItem("access-token") ? true: false;
    const history = useHistory();
    const userRole = useSelector(state=>state.user.info.role);
    console.log(useSelector(state=>state.user.info.role));
    if(isUserLoggedIn ){
        return React.cloneElement(children);
    }else{
         history.push("/admin/login");
    }
    return <></>;

}