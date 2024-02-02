import ClientTokenSessionServer from "@/app/models/auth/ClientTokenSessionServer";
import { clientServer } from "../baseUrl"
import axiosClientApiInstance from "../interceptor"
import UserSession from "@/app/models/auth/UserSession";

export const getTokenFromSessionServer = async () => {
    const response = await axiosClientApiInstance.get<ClientTokenSessionServer>(clientServer + '/api/session');
    if (response.status == 200 && response.data?.session) {
        const apiToken = response.data.session?.user.token?.apiToken ?? '';
        const userSession: UserSession = {
            name: response.data.session?.user.name,
            email: response.data.session?.user.email,
            image: response.data.session?.user.image,
            roles: response.data.session?.user.token?.roles
        }

        localStorage.setItem('token', apiToken);
        localStorage.setItem('userSession', JSON.stringify(userSession));
        return apiToken;
    }
}