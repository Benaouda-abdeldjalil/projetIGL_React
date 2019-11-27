import React, { Component }  from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import {
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

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
class RegistrationForm extends React.Component {
  constructor(props){
		super(props);
	}
  Addensg(e){
    e.preventDefault();
    axios
		.post('http://127.0.0.1:8000/api/ensg/add',{
      date_naissance:$('.Date_ensg').find('input').val(),
      date_rec:$('.Date_rec').find('input').val(),
      prenom:$('.ensg_Prenom').val(),
      name:$('.ensg_Nom').val(),
      email:$('.email_ensg').val(),
      num_inscr:$('.num_inscr_ensg').val(),
      lieu_naissance:$('.lieu_ensg').val(),
      grade:$('.grade').val(),
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

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
   
 return (
      <div style={{height:"600px"}} >
         


  <div >
    <Button type="primary" block>
  
      <span className='bt'>Inscription Des Enseignants</span>
    </Button>
   
  </div><br/>
  <div style={{float: "left" , width : "800px"}}>
      
      <Form {...formItemLayout} onSubmit={this.Addensg}>
        <Form.Item label="Nom">
          {getFieldDecorator('Nom', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Nom!',
              },
            ],
          })(<Input className="ensg_Nom"/>)}
        </Form.Item>
        <Form.Item label="Prenom">
          {getFieldDecorator('Prenom', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Prenom!',
              },
            ],
          })(<Input className="ensg_Prenom" />)}
        </Form.Item>
        <Form.Item label="Numéro d'enseignant">
          {getFieldDecorator('inscr', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Numero enseignant!',
              },
            ],
          })(<Input className="num_inscr_ensg" />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('Email', {
            rules: [
           
              {
                required: true,
                message: 'Please input your E-mail',
              },
            ],
          })(<Input className="email_ensg" />)}
        </Form.Item>
        <Form.Item label="Grade">
          {getFieldDecorator('Grade', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Grade',
              },
            ],
          })(<Input className="grade" />)}
        </Form.Item>
        
        

        <Form.Item label="date de naissance" >
        <DatePicker className="Date_ensg" style={{ width: '100%' }} />
          {getFieldDecorator('date', {
            rules: [
           
              {
                required: true,
                message: 'Please input your date de naissance',
              },
            ],
          })}
        </Form.Item>
        <Form.Item label="lieu de naissance">
          {getFieldDecorator('lieu', {
            rules: [
           
              {
                required: true,
                message: 'Please input your lieu de naissance',
              },
            ],
          })(<Input className="lieu_ensg"/>)}
        </Form.Item>
        
        <Form.Item label="date de recrutement" >
        <DatePicker className="Date_rec" style={{ width: '100%' }} />
          {getFieldDecorator('date', {
            rules: [
           
              {
                required: true,
                message: 'Please input here date de recrutement',
              },
            ],
          })}
        </Form.Item> 
        
          <center>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
             Inscrir
          </Button>
        </Form.Item>
        </center>
      </Form>
      
      </div>
      </div>
    );
  }
}

const InscrEnsei = Form.create({ name: 'register' })(RegistrationForm);

export default InscrEnsei;