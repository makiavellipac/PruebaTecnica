import React,{FC,ClipboardEvent,useContext,ChangeEvent,useState,FormEvent, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Avatar,Button,CssBaseline,TextField,Typography,Container} from '@material-ui/core';

import { Mycontext } from '../../Components/Context';
import Myservice from '../../Services/loginServices';
import  { verifyToken } from '../../Helpers/loginHelpers';

const { data } = require('../../Data/FakeLogin.json');
import { user } from '../../Types/types';


import LoginStyles from './LoginStyles';

const index: FC = () => {

  const [onpaste,setPaste]= useState(false)

  const history=useHistory();
  const { login,setLogin,clearLogin,setUserName } = useContext(Mycontext);
  const { userName,password } = login;

  const handlePaste = (e:ClipboardEvent) => {
    alert('No puedes pegar Texto')
    setPaste(true)
    clearLogin()
  }

  const handleChangue = ({currentTarget}:ChangeEvent<HTMLInputElement>)=>{
    !onpaste?
    setLogin(currentTarget.value,currentTarget.name):
    setPaste(false)
  }

  const onSubmit = (e: FormEvent)=>{
    if(data.find((use:user)=>use.userName === userName && use.password === password))
     {
      Myservice.login(userName)
      setUserName(userName)
      history.push('/employes')   
     }
     else{
       alert('Usuario o contraseña incorrectos')
       clearLogin()
     }
  }


    useEffect(()=>{
      const token=localStorage.getItem('token')
        if(token){
          verifyToken(token)
            .then(({userName})=>{
              if(userName){
                setUserName(userName)
                history.push('/employes')
              }
          })
      }
    },[])
  
  const classes = LoginStyles();
  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            name="userName"
            autoFocus
            value={userName}
            onPaste={handlePaste}
            onChange={handleChangue}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onPaste={handlePaste}
            onChange={handleChangue}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default index;