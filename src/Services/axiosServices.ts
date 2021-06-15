import axios from 'axios';
import dateParse  from '../Helpers/dateHelpers';

const baseURL= process.env.BASE_URL

const MY_SERVICE = axios.create({
  baseURL,
  withCredentials:false
})



type employe ={
  birthday: number
  id: number
  last_name: String
  name: String
}

const EMPLOYES_SERVICE={
  getEmployes: async (userName:String)=>{
    const {data} = await MY_SERVICE.get(`/${userName}`);
    const parseData = data.data.employees.map((user:employe)=>(
      {...user,birthday:dateParse(user.birthday)}
    ))
    return parseData;
  },
  saveEmployes: async(employ:{},userName:String)=>{
    const request= await MY_SERVICE.post(`/${userName}`,employ)
    return request
  }
}

export default EMPLOYES_SERVICE;