import axios from "axios";
import { loginFailure, loginSuccess, logout } from "../store/reducers/authSlice";
import { store } from "../store";
import { identityServer } from "../utils/baseUrls";

const dispatch = store.dispatch;
const axiosApiInstance = axios.create({
    withCredentials: true
});

axiosApiInstance.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
}, error => {
    Promise.reject(error)
});

axiosApiInstance.interceptors.response.use(response => {
    return response;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const response = await axios.post(identityServer + "/api/account/refresh-token");
            dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));
    
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.jwtToken;
            return axios(originalRequest);
        }
        catch (err: any) {
            dispatch(loginFailure(err.response));
            return error;
        }
    }

    dispatch(logout());
    return error;
});

export default axiosApiInstance;