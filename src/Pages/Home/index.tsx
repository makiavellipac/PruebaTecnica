import React,{FC,ClipboardEvent,useContext,ChangeEvent,useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Avatar,Button,CssBaseline,TextField,Typography,Container} from '@material-ui/core';

import { Mycontext } from '../../Components/Context';


import LoginStyles from './LoginStyles';

const index: FC = () => {

  const [onpaste,setPaste]= useState(false)

  const { login,setLogin,clearLogin } = useContext(Mycontext);
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
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default index;