import React,{ChangeEvent,SetStateAction} from "react";


type propsTypes={
  value:string,
  setValue:any,
  onChangue:any
}

const InputSearch = (props:propsTypes) => {

  const handleChangue=((e:ChangeEvent<HTMLInputElement>) =>
  {
    props.setValue(e.target.value)
    props.onChangue()
  })

  return(
    <input value={props.value} onChange={handleChangue} placeholder='Filtrar'/>
  )
    
}

export default InputSearch