import React, { Component }  from 'react';


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
      <div >
         


  <div >
    <Button type="primary" block>
  
      <span className='bt'>Inscription Des Enseignants</span>
    </Button>
   
  </div><br/>

      
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Nom">
          {getFieldDecorator('Nom', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Nom!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Prenom">
          {getFieldDecorator('Prenom', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Prenom!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Numéro d'enseignant">
          {getFieldDecorator('inscr', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Numero enseignant!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('Email', {
            rules: [
           
              {
                required: true,
                message: 'Please input your E-mail',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Grade">
          {getFieldDecorator('Grade', {
            rules: [
           
              {
                required: true,
                message: 'Please input your Grade',
              },
            ],
          })(<Input />)}
        </Form.Item>
        
        

        <Form.Item label="date de naissance" >
        <DatePicker style={{ width: '100%' }} />
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
          })(<Input />)}
        </Form.Item>
        
        <Form.Item label="date de recrutement" >
        <DatePicker style={{ width: '100%' }} />
          {getFieldDecorator('date', {
            rules: [
           
              {
                required: true,
                message: 'Please input here date de recrutement',
              },
            ],
          })}
        </Form.Item> 
        
      
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
             Inscrir
          </Button>
        </Form.Item>
      </Form>
      
      </div>
    );
  }
}

const InscrEnsei = Form.create({ name: 'register' })(RegistrationForm);

export default InscrEnsei;