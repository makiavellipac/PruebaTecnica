import React, { ChangeEvent, useState,FormEvent  } from 'react';
import { TextField, Theme, createStyles, makeStyles, Button, } from '@material-ui/core';

import EMPLOYES_SERVICE from '../Services/axiosServices';
import dateParse  from '../Helpers/dateHelpers';


type forms={
  name:string,
  last_name:string,
  birthday:string
}

type typeProps={
  userName:String,
  onClick:any
}

const useStyles = makeStyles((theme:Theme)=>
  createStyles({
    container:{
      display:'flex',
      flexDirection: 'column'
    },
    textField: {
      marginTop: theme.spacing(2),
      width: 300
    }
  })
)

const FormEmployes = (props:typeProps) =>{

  const [forms,setForms]=useState<forms>({
    name:'',
    last_name:'',
    birthday:''
  })

  const handleChangue =({currentTarget}:ChangeEvent<HTMLInputElement>)=>{
    if(currentTarget.value.length>30){
      setForms({...forms,[currentTarget.name]:currentTarget.value.slice(0,30)})
    }
    else{
      setForms({...forms,[currentTarget.name]:currentTarget.value})
    }
  }

  const onSubmit = (e: FormEvent)=>{
    if(Object.values(forms).find(value=>value==='')!==undefined){
      alert('Completa todos los campos')
    }
    else{
      EMPLOYES_SERVICE.saveEmployes({...forms,birthday:dateParse(forms.birthday)},props.userName).then(
        data=>props.onClick()
      )
    }
  }

  const classes=useStyles()

  return(
    <form className={classes.container}>
      <TextField label='Nombre' name='name' variant='outlined' className={classes.textField} value={forms.name} onChange={handleChangue}/>
      <TextField label='Apellidos' name='last_name' variant='outlined' className={classes.textField} value={forms.last_name} onChange={handleChangue}/>
      <TextField name='birthday' variant='outlined' type='date' className={classes.textField} value={forms.birthday} onChange={handleChangue}/>
      <Button color='primary' variant='contained' className={classes.textField} onClick={onSubmit} >Submit</Button>
    </form>
  )
}

export default FormEmployes