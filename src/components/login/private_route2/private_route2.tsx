import React from "react"
import styles from "./private_route.module.css";
import { Navigate, Outlet } from 'react-router-dom';



type PrivateRoute2Props = {
  login : boolean;
}



const PrivateRoute2 = ({login, ...rest}: PrivateRoute2Props) => {

  if(!login){
    return <Navigate to="/main/private" replace={true}/> 
  }
  

  return <Outlet context={{...rest}}/>

}
export default PrivateRoute2;