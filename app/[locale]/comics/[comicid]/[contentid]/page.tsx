import Breadcrumb from "@/app/components/contents/Breadcrumb";
import ContentComic from "@/app/components/contents/ContentComic";
import Comment from "@/app/components/contents/Comment";
import ContentResponse from "@/app/models/contents/ContentResponse";
import ServerResponse from "@/app/models/common/ServerResponse";
import getAxiosInstance from "@/lib/axios";
import { portalServer } from "@/lib/services/client/baseUrl";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const getContent = async (comicid: string | null, contentid: string | null, token: string | null = null) => {
    try {
        const response = await getAxiosInstance(portalServer, token).get<ServerResponse<ContentResponse>>(process.env.PORTAL_API_URL + `/api/client/ContentApp/comics/${comicid}/contents/${contentid}`);
        return response.data.data;
    }
    catch {
        return null;
    }
}

export default async function Content({ params }: { params: { comicid: string | null, contentid: string | null } }) {
    const session = await getServerSession(authOptions);
    const content = await getContent(params.comicid, params.contentid, session?.user?.token?.apiToken);
    return (
        <>
            <Breadcrumb content={content} />
            <ContentComic content={content} />
            <Comment />
        </>
    );
}