import getAxiosInstance from "@/lib/axios";
import Breadcrumb from "../../components/comic/Breadcrumb";
import ChapterComic from "../../components/comic/ChapterComic";
import CommentComic from "../../components/comic/CommentComic";
import InfomationComic from "../../components/comic/InfomationComic";
import ComicDetail from "@/app/models/comics/ComicDetail";
import ServerResponse from "@/app/models/common/ServerResponse";

const getComic = async (comicid: string | null) => {
    try {
        const response = await getAxiosInstance(process.env.PORTAL_API_URL).get<ServerResponse<ComicDetail>>(process.env.PORTAL_API_URL + `/api/client/ComicApp/${comicid}`);
        return response.data.data;
    }
    catch {
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