import React,{FC,Fragment, ReactNode, useContext, useEffect, useState,} from 'react';

import { Mycontext } from '../../Components/Context';
import DataContainer from '../../Components/DataContainer';


import EMPLOYES_SERVICE from '../../Services/axiosServices';
import InputSearch from '../../Components/InputSearch';

type employ={
  birthday: string
  id: number
  last_name: string
  name: string
}

const index: FC = () => {

  const {userInfo} = useContext(Mycontext);
  const {userName} = userInfo;

  const [employess,setEmployess]=useState<employ[]>([])
  const [employessDefault,setEmployessDefault]=useState<employ[]>([])
  const [inputValue,setInputValue]=useState('')

  const handleChangue = () =>{
    const filteres = employessDefault.filter(({name})=>{
      return name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    })
    console.log(filteres)
    setEmployess(filteres)
    if(inputValue===''){
      setEmployess(employessDefault)
    }
  }

  useEffect(()=>{
    userName!==''?
    EMPLOYES_SERVICE.getEmployes(userName).then((data)=>
    {
      setEmployessDefault(data)
      setEmployess(data) 
    }
    ):null
  },[])

  return(
    <Fragment>
      <DataContainer rows={employess}/>
      <InputSearch value={inputValue} setValue={setInputValue} onChangue={handleChangue}/>
    </Fragment>
  )
}

export default index;