import React, { Component }  from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import   ProfileEns from "./ProfileEns.js"
import ChangePass from "./passwordEnsei.js"
import Note from "./note.js"
import{Link,Route,Switch} from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomeENS extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

 
            
            
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
         collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" style={{marginTop:"50px"}}>
            <Link to="/Profile">
            <Icon type="team" />
              <span>Profile</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/Note">
            <Icon type="unordered-list" />
              <span>Afficher les notes</span>
              </Link>
            </Menu.Item>
          <Menu.Item key="3">
          <Link to="./Changepassword">
          <Icon type="setting" />
              <span>Setting</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="4">
              <Link to="./Deconxion">
              <Icon type="logout" />
              <span>Deconxion</span>
              </Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'rgb(83, 169, 250) ', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
               </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>
            <Switch>
       
       <Route exact   path="/profile"  >
         <ProfileEns />
       </Route>
      <Route path="/Note"  >
        <Note />
        </Route>
        
        <Route path="/Changepassword"  >
        <ChangePass />
        </Route>
        
        <Route path="/Deconxion"  >
        
        </Route>
       </Switch>





                
            </div>
          </Content>
         
        </Layout>
      </Layout>
    );
  }
}

export default HomeENS;