import getAxiosInstance from "@/lib/axios";
import Breadcrumb from "../../../components/comic/Breadcrumb";
import ChapterComic from "../../../components/comic/ChapterComic";
import CommentComic from "../../../components/comic/CommentComic";
import InfomationComic from "../../../components/comic/InfomationComic";
import ServerResponse from "@/app/models/common/ServerResponse";
import ComicDetail from "@/app/models/comics/ComicDetail";
import { portalServer } from "@/lib/services/client/baseUrl";

const getComic = async (comicid: string | null) => {
    try {
        const response = await getAxiosInstance(portalServer).get<ServerResponse<ComicDetail>>(process.env.PORTAL_API_URL + `/api/client/ComicApp/${comicid}`);
        return response.data.data;
    }
    catch (exception: any) {
        return null;
    }
}

export default async function Comic({ params }: { params: { comicid: string | null } }) {
    const comic = await getComic(params.comicid);
    return (
        <>
            <Breadcrumb title={comic?.title} friendlyName={comic?.friendlyName} />
            <InfomationComic comic={comic} />
            <ChapterComic contents={comic?.contents} />
            <CommentComic />
        </>
    );
}