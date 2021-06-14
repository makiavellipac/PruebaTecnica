import React,{createContext,FC,useState} from "react";
import { withRouter } from "react-router";

import { ContexState } from "../Types/types";

const contextInit: ContexState = {
  userInfo:{
    userName:''
  },
  login: {
    userName:'',
    password:''
  },
  setUserName:() => {},
  setLogin: () => {},
  clearLogin:()=> {}
}

export const Mycontext = createContext<ContexState>(contextInit);

const MyProvider: FC =({children}) => {

  const [userInfo, setUserInfo] = useState<{userName:String}>(contextInit.userInfo);
  const [login, setLogi] = useState<{userName:String,password:String
  }>(contextInit.login);

  const setUserName = (userName:String) => {
    setUserInfo({userName})
  }

  const setLogin = (value:String,name:String)=>{
    setLogi(
      {
        ...login,
        [name.toString()]:value
      }
    )
  }

  const clearLogin = ()=>{
    setLogi(
      {
        userName:'',
        password:''
      }
    )
  }

  return (
    <Mycontext.Provider value={{userInfo,login,setUserName,setLogin,clearLogin}}>
      {children}
    </Mycontext.Provider>
  )

}

export default withRouter(MyProvider);