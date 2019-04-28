import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';

export const getAuthors = () => {
    return axios.get(`${BACKEND_URL}/api/authors/listing`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.data)
}


export const EditAuthor = ({ _id, FN, LN, DOB }) => {
    return axios.patch(`${BACKEND_URL}/api/authors/${_id}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        },
        _id,
        FN,
        LN,
        DOB
    })
        .then(res => res.data)
}

export const deleteAuthor = (id) => {
    return axios.delete(`${BACKEND_URL}/api/authors/${id}`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.data)
}

export const addAuthor = ({ FN, LN, DOB }) => {
    return axios.post(`${BACKEND_URL}/api/authors/`, {
        headers: {
            authorization: `bearer ${localStorage.getItem('token')}`
        },
        FN,
        LN,
        DOB
    })
        .then(res => res.data)
}

