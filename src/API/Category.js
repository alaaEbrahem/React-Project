import axios from 'axios';

const BACKEND_URL='http://localhost:3000';

export const getCategoryID=()=>{
    debugger
    return axios.get(`${BACKEND_URL}/api/categories`,{
        // headers:{
        //     authorization:`bearer ${localStorage.getItem('token')}`
        // }
    })
    .then(res=>res.data)
}