
import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

// const userDeleted = (users) => ({
//     type: types.DELETE_USER,
//     payload: users,
// })
const userAdded = (users) => ({
    type: types.ADD_USER,
    
})
const userUpdated = (user) => ({
    type: types.UPDATE_USER,
    
})
const filter = (Status) => ({
    type: types.FILTER_USER,
    payload:Status,
    
})
const sort = (users) => ({
    type: types.SORT_USER,
    payload:users,
    
})


const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload:user,
    
})


export const loadUsers = (start,end) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?_start=0&_end=4`).then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};


// export const deleteUser = (id) => {
//     return function (dispatch) {
//         axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
//             console.log("resp", resp)
//             dispatch(userDeleted());
//             dispatch(loadUsers());
//         })
//         .catch((error) => console.log(error));
//     };

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp) => {
            console.log("resp", resp)
            dispatch(userAdded());
            dispatch(loadUsers());
        })
        .catch((error) => console.log(error));
    };
};
export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getUser(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};
export const updateUser = (user,id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp) => {
            console.log("resp", resp)
            dispatch(userUpdated());
            dispatch(loadUsers());
          
        })
        .catch((error) => console.log(error));
    };
};
export const filterUser = (Status) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?Status=${Status}`).then((resp) => {
            console.log("resp", resp)
            dispatch(filter(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
};
export const sortUser = (user) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}?_sort=${user}&_order=asc`).then((resp) => {
            console.log("resp", resp)
            dispatch(sort(resp.data));
          
        })
        .catch((error) => console.log(error));
    };
}

