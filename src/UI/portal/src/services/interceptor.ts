import axios from "axios";
import { loginSuccess, logout } from "../store/reducers/authSlice";
import { store } from "../store";

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

        const response = await axiosApiInstance.post("/api/account/refresh-token");
        dispatch(loginSuccess({ data: response.data, token: response.data.jwtToken }));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.jwtToken;
        return axiosApiInstance(originalRequest);
    }

    dispatch(logout());
    return Promise.reject(error);
});

export default axiosApiInstance;