import React from "react"
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Option', dataIndex: 'option', key: 'option' },
  { title: 'Option', dataIndex: 'option,', key: 'option' },
  { title: 'Option', dataIndex: 'option', key: 'option' },
  { title: 'Option', dataIndex: 'option', key: 'option' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'Abdou  missoum',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"

  },
  {
    key: 2,
    name: 'Minx Tinx',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"
  },
  {
    key: 3,
    name: 'Minks tinks',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"
  },
  {
    key: 4,
    name: 'Abdou  missoum',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"

  },
  {
    key: 5,
    name: 'Minks tinks',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"
  },
  {
    key: 6,
    name: 'Minx Tinx',
    age:"19 ans",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla",
    option:"blablblablabla"
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