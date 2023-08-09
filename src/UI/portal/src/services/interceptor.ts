import axios from "axios";
import { loginSuccess, logout } from "../store/reducers/authSlice";
import { store } from "../store";
import { IdentityServer } from "../utils/baseUrls";

const dispatch = store.dispatch;
const axiosApiInstance = axios.create();

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
        const response = await axios.post(IdentityServer + "/api/account/refresh-token");
        dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.jwtToken;
        return axios(originalRequest);
    }

    dispatch(logout());
    return error;
});

export default axiosApiInstance;