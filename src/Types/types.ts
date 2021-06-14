export type ContexState = {
  userInfo:{
    userName:String
  },
  setUserName: (userName:String) => void;
}