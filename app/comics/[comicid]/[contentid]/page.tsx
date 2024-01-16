import Breadcrumb from "@/app/components/contents/Breadcrumb";
import ContentComic from "@/app/components/contents/ContentComic";
import Comment from "@/app/components/contents/Comment";
import ContentResponse from "@/app/models/contents/ContentResponse";
import ServerResponse from "@/app/models/common/ServerResponse";
import getAxiosInstance from "@/lib/axios";

const getContent = async (comicid: string | null, contentid: string | null) => {
    try {
        const response = await getAxiosInstance(process.env.PORTAL_API_URL).get<ServerResponse<ContentResponse>>(process.env.PORTAL_API_URL + `/api/client/ContentApp/comics/${comicid}/contents/${contentid}`);
        return response.data.data;
    }
    catch {
        return null;
    }
}

export default async function Content({ params }: { params: { comicid: string | null, contentid: string | null } }) {
    const content = await getContent(params.comicid, params.contentid);
    return (
        <>
            <Breadcrumb content={content} />
            <ContentComic content={content} />
            <Comment />
        </>
    );
}