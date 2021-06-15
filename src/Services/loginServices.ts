import {createAuthToken} from '../Helpers/loginHelpers';


const Myservice ={
  login:async (user:String)=>{
     const newToken= createAuthToken(user,200,process.env.JWT_SECRET,process.env.EXPIRES_IN)
           .then((token)=>localStorage.setItem('token',token.token))
     return newToken
  }
  
}

export default Myservice;