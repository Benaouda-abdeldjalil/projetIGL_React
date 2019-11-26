import React, { Component }  from 'react';
import HomeAdmis from "./Admistration/HomeAdmis.js"
import HomeEtud from "./Etudiant/HomeEtud.js"
import HomeEnsei from "./Enseignantes/HomeEnsei.js"
if(localStorage.getItem('user_conect')){
    var session=JSON.parse(localStorage.getItem('user_conect'))     
}
class Dashboard extends Component {
    getuserdash(){
        if(localStorage.getItem('user_conect')){
            switch(session.user_con){
                case 'a':
                    return(<HomeAdmis/>)
                case '0':
                    return(<HomeEnsei/>)
                case '1':
                    return(<HomeEtud/>)
            }
        }
        return (<HomeEnsei/>)
    }
render(){
    if(localStorage.getItem('user_conect')){
        return(
        <div>
            {this.getuserdash()}
        </div>
        )
        return ('')
    }else{
        window.location="/login";
        return ('')
    }
}
}
export default Dashboard; 