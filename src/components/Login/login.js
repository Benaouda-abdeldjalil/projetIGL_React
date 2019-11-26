import React, { Component }  from 'react';
import { Layout,Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
import { logicalExpression } from '@babel/types';
import {login} from './UserFuntion'
import ReactDOM from 'react-dom';
const { Header, Content, Footer, Sider } = Layout;
class NormalLoginForm extends React.Component {
  constructor(props){
    super()
    this.handlefonction=this.handlefonction.bind(this)
    this.state={
      email:'',
      motpass:'',
      errors:{}
    }
    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
 


  handlefonction=()=>{
  
  
  
    
 
      

  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const user = {
      email:this.state.email,
      motpass:this.state.motpass,
    }
    login(user)
   
   
  }


  render() {
   
    const { getFieldDecorator } = this.props.form;
    if(!localStorage.getItem('user_conect')){
      return (
        <div >
         <Header style={{ background:"rgb(83, 169, 250) ", padding: 0 }} />
       
        <div className="login" id="form"    style={{paddingBottom:"10px",paddingTop:"150px"}}>
        
        <Form 
        onSubmit={this.onSubmit} className="login-form">
        <Form.Item>
        <h1 id="myHeader"
        >Login</h1>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your E-mail!' }],
            })(
              <Input
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                prefix={<Icon type="user" style={{ color: 'rgb(83, 169, 250) ' }} />}
                placeholder="E-mail"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                name="motpass"
                value={this.state.motpass}
                onChange={this.onChange}
                prefix={<Icon type="lock" style={{ color: 'rgb(83, 169, 250) ' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
          <Button 
        
         
         type="primary"
           htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
           </Form.Item>
          
  
          
        </Form>
        </div>
       
        </div>
        
      );
    }else{
      window.location="/";
      return ('')
    }
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;