import axios from 'axios';

const BACKEND_URL='http://localhost:3000';

export const getBooks=()=>{
    debugger
    return axios.get(`${BACKEND_URL}/api/books/`,{
        // headers:{
        //     authorization:`bearer ${localStorage.getItem('token')}`
        // }
    })
    .then(res=>res.data)
}

export const EditBook=({Photo,_id,Name,CategoryID,AuthorID})=>{
    debugger
    // const img=Photo.substring(12);
    // const files= {'files':(img, open(Photo,'rb'), 'image/jpeg')}
    return axios.patch(`${BACKEND_URL}/api/books/${_id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        // files,
        Photo,
        _id,
        Name,
        CategoryID,
        AuthorID
    })
    .then(res=>res.data)
}

export const deleteBook=(id)=>{
    debugger
    return axios.delete(`${BACKEND_URL}/api/books/${id}`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res=>res.data)
}

export const addBook=({Photo,Name,CategoryID,AuthorID})=>{
    debugger
    return axios.post(`${BACKEND_URL}/api/books/`,{
        headers:{
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        Photo,
        Name,
        CategoryID,
        AuthorID

    })
    .then(res=>res.data)
}