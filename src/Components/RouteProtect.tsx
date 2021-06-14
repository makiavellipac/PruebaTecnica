import React,{FC,useEffect,useContext} from "react";
import {Route,RouteProps,useHistory} from 'react-router-dom';
import { Mycontext } from "./Context";

const RouteProtect: FC<RouteProps> = (props) =>{
  const {userInfo} = useContext(Mycontext);
  const {userName} = userInfo;
  const history = useHistory()

  useEffect(()=>{
    if(userName===''){
      history.push('/')
    }
  },[props?.location?.pathname])
  return <Route {...props}/>
}

export default RouteProtect