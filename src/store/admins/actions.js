import {
    GET_ADMIN,
    GET_ADMIN_SUCCESS,
    API_ERROR,
    CREATE_ADMIN,
    CREATE_ADMIN_SUCCESS,
    DELETE_ADMIN,
    DELETE_ADMIN_SUCCESS,
} from './actionTypes';

export const getAllAdmins = () => {
    return {
        type: GET_ADMIN,
    };
};
export const getAdminsSuccess = admins => {
    return {
        type: GET_ADMIN_SUCCESS,
        payload: admins,
    };
};

export const createAdmin = adminData => {
    return {
        type: CREATE_ADMIN,
        payload: { adminData },
    };
};
export const createAdminSuccess = admin => {
    return {
        type: CREATE_ADMIN_SUCCESS,
        payload: admin,
    };
};

export const deleteAdmin = admin_id => {
    // console.log(admin_id)
    return {
        type: DELETE_ADMIN,
        payload: { admin_id },
    };
};

export const deleteAdminSuccess = admins => {
    return {
        type: DELETE_ADMIN_SUCCESS,
        payload: admins,
    };
};

export const apiError = error => {
    return {
        type: API_ERROR,
        payload: error,
    };
};
