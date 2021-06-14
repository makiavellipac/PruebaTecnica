export type ContexState = {
  userInfo:{
    userName:String
  },
  login: {
    userName:String,
    password:String
  };
  setUserName: (userName:String) => void;
  setLogin: (value:String,name:String) => void;
  clearLogin:()=>void
}