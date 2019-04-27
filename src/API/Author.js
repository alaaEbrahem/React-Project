import axios from 'axios';

const BACKEND_URL='http://localhost:3000';

export const getAuthorID=()=>{
    debugger
    return axios.get(`${BACKEND_URL}/api/authors/listing`,{
        // headers:{
        //     authorization:`bearer ${localStorage.getItem('token')}`
        // }
    })
    .then(res=>res.data)
}