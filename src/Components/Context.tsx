import React,{createContext,FC,useState} from "react";
import { withRouter } from "react-router";

import { ContexState } from "../Types/types";

const contextInit: ContexState = {
  userInfo:{
    userName:''
  },
  setUserName:() => {},
}

export const Mycontext = createContext<ContexState>(contextInit);

const MyProvider: FC =({children}) => {
  const [userInfo, setUserInfo] = useState<{userName:String}>(contextInit.userInfo);
  const setUserName = (userName:String) => {
    setUserInfo({userName})
  }

  return (
    <Mycontext.Provider value={{userInfo,setUserName}}>
      {children}
    </Mycontext.Provider>
  )

}

export default withRouter(MyProvider);