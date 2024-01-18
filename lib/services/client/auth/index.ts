import ClientTokenSessionServer from "@/app/models/auth/ClientTokenSessionServer";
import { clientServer } from "../baseUrl"
import axiosClientApiInstance from "../interceptor"

export const getTokenFromSessionServer = async () => {
    const response = await axiosClientApiInstance.get<ClientTokenSessionServer>(clientServer + '/api/session');
    if (response.status == 200 && response.data && response.data.session) {
        const apiToken = response.data.session?.user.token?.apiToken ?? '';
        localStorage.setItem('token', apiToken);
        return apiToken;
    }
}