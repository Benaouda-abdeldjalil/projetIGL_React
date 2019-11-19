import axios from 'axios';

import { Redirect } from 'react-router-dom';
export const login = user =>{
    return axios
        .post('http://127.0.0.1:8000/api/admin/login',{
            email:user.email,
            motpass:user.motpass
        },{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            alert(res.data.data)
            localStorage.setItem('user',res.data.data)
        })
        .catch(err =>{
            alert(err)
        })
}
