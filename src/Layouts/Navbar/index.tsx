import React,{FC} from 'react'
import { NavLink } from 'react-router-dom'

const index:FC = ({children}) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to='/employes'>
            Empleados
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/upload'>
            Upload
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default index
