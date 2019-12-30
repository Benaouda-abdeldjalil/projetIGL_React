import React from "react"
import { Table } from 'antd';

const columns = [
  { title: 'Expéditeur', dataIndex: 'name', key: 'name' },
  { title: 'Année', dataIndex: 'année', key: 'année' },
  { title: 'Groupe', dataIndex: 'groupe', key: 'groupe' },
  {
    title: 'Télécharger',
    dataIndex: '',
    key: 'x',
    render: () => <a>télécharger</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'm_batata@esi.dz',
    année:"1CS",
    groupe:"05"

  },
  {
    key: 2,
    name: 'm_batata@esi.dz',
    année:"1CS",
    groupe:"05"

  },
  {
    key: 3,
    name: 'm_batata@esi.dz',
    année:"1CS",
    groupe:"05"
  },
  
];


function tab (){
    return(
    <Table
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={data}
    />)}
    export default tab;