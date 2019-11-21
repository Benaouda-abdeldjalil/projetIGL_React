import React ,{Component} from "react"

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
 render (){
return (
    
 <div>
     <br /><br /><br /><br />
    <Dragger {...props}>
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
          <Select defaultValue="Année">
            <Option value="1CP">1CP</Option>
            <Option value="2CP">2CP</Option>
            <Option value="1CS">1CS</Option>
            <Option value="2CS">2CS</Option>
            <Option value="3CS">3CS</Option>
            
          </Select>
          <Select defaultValue="Groupe">
            <Option value="g1">G1</Option>
            <Option value="g2">G2</Option>
            <Option value="g3">G3</Option>
            <Option value="g4">G4</Option>
            <Option value="g5">G5</Option>
            <Option value="g6">G6</Option>
          </Select>
        </InputGroup>
        <br /><br />
     <Button type="primary">Envoyer</Button>
     </center>
  </div>

    )

 }
    

}
export default Note;




