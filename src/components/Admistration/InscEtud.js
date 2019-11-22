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

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class InscriptionEtud extends React.Component {
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div >
        
  <div >
    <Button type="primary" block>
  
      <span className='bt'>Inscription Des Etudiants</span>
    </Button>
   
  </div><br/>
    <div style={{float: "left" , width : "800px"}}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Nom">
          {getFieldDecorator('Nom', {
            rules: [
           
              {
                required: true,
                message: 'Please input his first-name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Prenom">
          {getFieldDecorator('Prenom', {
            rules: [
           
              {
                required: true,
                message: 'Please input his last-name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Numéro d'inscreption">
          {getFieldDecorator('inscr', {
            rules: [
           
              {
                required: true,
                message: 'Please input his Number of inscreption!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('Email', {
            rules: [
           
              {
                required: true,
                message: 'Please input his E-mail',
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
                message: 'Please input his birth date',
              },
            ],
          })}
        </Form.Item>
        <Form.Item label="lieu de naissance">
          {getFieldDecorator('lieu', {
            rules: [
           
              {
                required: true,
                message: 'Please input his place of birth',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Année">
          {getFieldDecorator('Année', {
            rules: [
           
              {
                required: true,
                message: 'Please input his year of study',
              },
            ],
          })(<Input />)}
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

const InscEtud = Form.create({ name: 'register' })(InscriptionEtud);

export default InscEtud;