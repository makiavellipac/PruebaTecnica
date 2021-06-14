import React from 'react';
import { DataGrid, GridColDef, GridRowData } from '@material-ui/data-grid';

type propsTypes={
  rows:GridRowData[]
}

const columns: GridColDef[] =[
  {field:'id',headerName: 'ID', width: 70},
  {field:'name',headerName: 'Name', width: 200},
  {field:'last_name',headerName: 'Last Name', width: 200},
  {field:'birthday',headerName: 'Birthday', width: 200},
];

const DataContainer = (props:propsTypes)=>{
  return(
    <div style={{height:630,width:'100%'}}>
      <DataGrid rows={props.rows} columns={columns} pageSize={10}/>
    </div>
  )
}

export default DataContainer