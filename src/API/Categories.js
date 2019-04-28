import axios from 'axios';

const BACKEND_URL='http://localhost:3000';

export const getCategories=()=>{
  
    return axios.get(`${BACKEND_URL}/api/categories/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}


export const EditCategory=({_id,Name})=>{
  
    return axios.patch(`${BACKEND_URL}/api/categories/${_id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        _id,
        Name,
      
    })
    .then(res=>res.data)
}

export const deleteCategory=(id)=>{
    debugger
    return axios.delete(`${BACKEND_URL}/api/categories/${id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}

export const addCategory=({Name})=>{
 
    return axios.post(`${BACKEND_URL}/api/categories/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        Name,
     

    })
    .then(res=>res.data)
}