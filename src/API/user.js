import axios from 'axios';

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

export const getUsers=()=>{
  
    return axios.get(`${BACKEND_URL}/api/users`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}

export const EditUser=({_id,Name})=>{
  
    return axios.patch(`${BACKEND_URL}/api/users/${_id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        _id,
        Name,
      
    })
    .then(res=>res.data)
}

export const deleteUser=(id)=>{
    debugger
    return axios.delete(`${BACKEND_URL}/api/users/${id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}

export const addUser=({username,name,password,email})=>{
 
    return axios.post(`${BACKEND_URL}/api/users/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        username,name,password,email
     

    })
    .then(res=>res.data)
}
export const addLogin=({username,password})=>{
 
    return axios.post(`${BACKEND_URL}/api/users/login`,{
       
        username,password
    })
    
    .then(res=>res.data);
   
}