import React from 'react';
import { TextField, Theme, createStyles, makeStyles, Button } from '@material-ui/core';

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

const FormEmployes = () =>{

  const classes=useStyles()

  return(
    <form className={classes.container}>
      <TextField label='Nombre' name='name' variant='outlined' className={classes.textField}/>
      <TextField label='Apellidos' name='last_name' variant='outlined' className={classes.textField}/>
      <TextField name='birthday' variant='outlined' type='date' className={classes.textField}/>
      <Button color='primary' variant='contained' className={classes.textField}>Submit</Button>
    </form>
  )
}

export default FormEmployes