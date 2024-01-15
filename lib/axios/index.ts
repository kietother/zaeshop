import axios, { CreateAxiosDefaults } from "axios";

const getAxiosInstance = (baseURL?: string, token?: string | null) => {
    const config: CreateAxiosDefaults<any> | undefined = {
        baseURL
    };

    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`
        }
    }

    const axiosApiInstance = axios.create(config);
    return axiosApiInstance;
}

export default getAxiosInstance;
