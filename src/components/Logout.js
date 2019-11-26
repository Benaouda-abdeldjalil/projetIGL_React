import React, { Component }  from 'react';

class Logout extends Component {
render(){
    localStorage.removeItem('user_conect')
    window.location="/login"
    return ('')
}
}
export default Logout; 