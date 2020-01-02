import React ,{Component} from "react"
import axios from 'axios';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { 
  Upload, 
  Icon, 
  message,
   Button , 
  Input, 
  Col, 
  Row,
   Select,
   InputNumber,
   DatePicker, 
  AutoComplete, 
  Cascader} from 'antd';

const { Dragger } = Upload;
const InputGroup = Input.Group;
const { Option } = Select;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class Note extends React.Component {
  constructor(props){
		super(props);
	}
  Envoinote(e){
    e.preventDefault();
    axios
		.post('http://127.0.0.1:8000/api/note',{
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
 render (){
return (
    
 <div onSubmit={this.Envoinote}>
     <br /><br /><br /><br />
    <Dragger {...props} className="fichier">
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Cliquer ici pour importer le fichier de excel du notes</p>
    <p className="ant-upload-hint">
      Affichage des notes des etudiants par Groupe   
    </p>
    <br />
    <Button type="dashed">Click here</Button>
  </Dragger>
  <br />

    <center>
    <h3>Choisez l'année et le groupe concernant pour l'affichage</h3>

        <InputGroup compact>
          <Select defaultValue="Année" className="niveau">
            <Option value="1CP">1cp</Option>
            <Option value="2CP">2cp</Option>
            <Option value="1CS">1cs</Option>
            <Option value="2CS">2cs</Option>
            
          </Select>
          <Select defaultValue="Groupe" className="groupe">
            <Option value="g1">1</Option>
            <Option value="g2">2</Option>
            <Option value="g3">3</Option>
            <Option value="g4">4</Option>
            <Option value="g5">5</Option>
            <Option value="g6">6</Option>
          </Select>
        </InputGroup>
        <br /><br />
        <Button type="primary" htmlType="submit">Envoyer</Button>
     </center>
  </div>

    )

 }
    

}
export default Note;




