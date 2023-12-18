import Breadcrumb from "@/app/components/contents/Breadcrumb";
import ContentComic from "@/app/components/contents/ContentComic";
import Comment from "@/app/components/contents/Comment";

export default function Content({ params }: { params: { comicid: string | null, contentid: string | null } }) {
    return (
        <>
            <Breadcrumb />
            <ContentComic comicid={params.comicid} contentid={params.contentid} />
            <Comment />
        </>
    );
}