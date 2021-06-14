import React,{FC,Fragment, useContext, useEffect, useState,} from 'react';
import { GridRowData } from '@material-ui/data-grid';
import { Mycontext } from '../../Components/Context';
import DataContainer from '../../Components/DataContainer';


import EMPLOYES_SERVICE from '../../Services/axiosServices';

const index: FC = () => {

  const {userInfo} = useContext(Mycontext);
  const {userName} = userInfo;

  const [employess,setEmployess]=useState<GridRowData[]>([])

  useEffect(()=>{
    userName!==''?
    EMPLOYES_SERVICE.getEmployes(userName).then((data)=>
    {
      setEmployess(data) 
    }
    ):null
  },[])

  return(
    <Fragment>
      <DataContainer rows={employess}/>
    </Fragment>
  )
}

export default index;