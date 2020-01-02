import React, { Component }  from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onChanger, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Changer Votre Mot de passe"
          okText="Changer"
          onCancel={onCancel}
          onOk={onChanger}
        >
          <Form layout="vertical">
                <Form.Item label="Ancien Mot de passe" hasFeedback>
                {getFieldDecorator('passwordanc', {
                    rules: [
                    {
                        required: true,
                        message: 'Entrez votre Ancien Mot de passe!',
                    },
                    {
                        validator: this.validateToNextPassword,
                    },
                    ],
                })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Nouveau Mot de passe" hasFeedback>
                {getFieldDecorator('passwordnouv', {
                    rules: [
                    {
                        required: true,
                        message: 'Entrez votre Nouveau Mot de passe!',
                    },
                    {
                        validator: this.validateToNextPassword,
                    },
                    ],
                })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Confirmer Votre Nouveau Mot de passe" hasFeedback>
                {getFieldDecorator('passwordnouvconf', {
                    rules: [
                    {
                        required: true,
                        message: 'Confirmer votre Nouveau Mot de passe!',
                    },
                    {
                        validator: this.validateToNextPassword,
                    },
                    ],
                })(<Input.Password />)}
                </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleChanger = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
         <List
          dataSource={[
            {
              name: 'Abdeldjalil Benaouda',
            },
           
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showModal} key={`a-${item.id}`}>
                  Changer Votre Mot de passe
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Pour Changer Votre Mot de passe Cliquer sur Changer Votre Mot de passe "
              />
            </List.Item>
          )}
        />
        
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onChanger={this.handleChanger}
        />
      </div>
    );
  }
}

const WrappedChgPwdForm = Form.create({ name: 'chgpwd' })(CollectionsPage);

export default    WrappedChgPwdForm;