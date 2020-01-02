import React, { Component }  from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import {
  Table,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker
} from 'antd';
const columns = [
  { title: 'Expéditeur', dataIndex: 'name', key: 'name' },
  { title: 'Année', dataIndex: 'année', key: 'année' },
  { title: 'Groupe', dataIndex: 'groupe', key: 'groupe' },
  {
    title: 'Télécharger',
    dataIndex: '',
    key: 'x',
    render: () => <a className="fichier">télécharger</a>,
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

class Consulternt extends React.Component {
  constructor(props){
		super(props);
	}
  ConsultNt(e){
    e.preventDefault();
    axios
		.post('http://127.0.0.1:8000/api/notes',{
			niveau:$('.niveau').find('input').val(),
      groupe:$('.groupe').find('input').val(),
      fichier:$('.fichier').find('input').val(),
		})
		.then(res=>{
			alert()
			console.log(res)
			
		})
		.catch(err=>{
      alert('error');
      console.log(err)
    })
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  render() {
    return(

    <Table
        columns={columns}
        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
        dataSource={data}
      />
  );
}
}
const Tab = Form.create({ name: 'register' })(Consulternt);

    export default Tab;
 
