import React, { Component }  from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import{Link,Route,Switch} from "react-router-dom"
import ProfileAd from "./ProfileAdmis.js"
import Changepassword from "./passwordAdmis.js"
import InscrEnsei from "./InscEnsei.js";
import InscEtud from './InscEtud.js';
import ListeEtud from "./ListeEtud.js"
import ListeEns from "./listeEns.js"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomeAdmis extends React.Component {
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
            <Link to="./profile">
              <Icon type="team" />
              <span>Profile</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="down-circle" />
                  <span>Gestion Des Etudiant</span>
                </span>
              }
            >
              <Menu.Item key="2">
              <Link to="./liste_Etudiant">
                <Icon type="unordered-list" />
                Liste Des Etudiants</Link></Menu.Item>
              <Menu.Item key="3">
                <Link to="./Inscr_Etudiant"><Icon type="form" />
                Increption</Link>
                
              </Menu.Item>
              
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="down-circle" />
                  <span>Gestion Des Enseignantes</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="./Liste_Enseignantes">
              <Icon type="unordered-list" />Liste des Enseignantes </Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to="./Inscr_Ensei">
              <Icon type="form" />Increption </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
            <Link to="./change_password">
            <Icon type="setting" />
              
              <span>Setting</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
            <Link to="./Deconxion">
            <Icon type="logout" />
              <span>Deconxion</span>
              </Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'rgb(83, 169, 250)', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
               </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 600 }}>
            
            <Switch>
       
       <Route exact   path="/profile"  >
         <ProfileAd />
       </Route>
       <Route path="/liste_Etudiant"  >
        <ListeEtud />
        </Route>
        <Route path="/Inscr_Etudiant"  >
        <InscEtud />
        </Route>
        <Route path="/Liste_Enseignantes"  >
        <ListeEns />
        </Route>
        <Route path="/Inscr_Ensei"  >
        <InscrEnsei />
        </Route>
        <Route path="/change_password"  >
        <Changepassword />
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

export default HomeAdmis;