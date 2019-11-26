import React ,{Component} from "react"

import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class ProfileEns extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
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
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Profile
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Pour voir le Profile Cliquer sur View Profile "
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Nom et Prenom" content="Abdeldjalil Benaouda" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="E-mail" content="ha_benaouda@esi.dz" />
            </Col>
          </Row>
          
          <Row>
            <Col span={12}>
              <DescriptionItem title="Date de naissance" content="Aout 12,1999" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Lieu de naissance" content="MEDEA" />
            </Col>
          </Row>
     
          <Divider />
          <p style={pStyle}>Information D'etude</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Année D'etude" content="1CS" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Groupe" content="G05" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Department" content="Informatique" />
            </Col>
        
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contacts</p>
          <Row>
            <Col span={24}>
              <DescriptionItem title="Email" content="ha_benaouda@esi.dz" />
            </Col>
           
          </Row>
          
        </Drawer>
      </div>
    );
  }
}

export default ProfileEns;
