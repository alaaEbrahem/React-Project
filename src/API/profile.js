import axios from 'axios';

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

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

export const addProfile=({Name,Author,AvgRating,Rating,Shelve})=>{
    debugger
    return axios.post(`${BACKEND_URL}/api/profile`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        Name,Author,AvgRating,Rating,Shelve
    })
    .then(res=>res.data)
}