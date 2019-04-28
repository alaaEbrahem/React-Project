import axios from 'axios';

const BACKEND_URL='http://localhost:3000';

export const getProfile=()=>{
    debugger
    return axios.get(`${BACKEND_URL}/api/profile`,{
    })
    .then(res=>res.data)
}

export const editProfile=({_id,Shelve})=>{
    debugger
    return axios.patch(`${BACKEND_URL}/api/profile/${_id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        Shelve
    })
    .then(res=>res.data)
}