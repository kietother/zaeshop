import Breadcrumb from "../../components/comic/Breadcrumb";
import ChapterComic from "../../components/comic/ChapterComic";
import CommentComic from "../../components/comic/CommentComic";
import InfomationComic from "../../components/comic/InfomationComic";

export default function Comic() {
    return (
        <>
            <Breadcrumb />
            <InfomationComic />
            <ChapterComic />
            <CommentComic />
        </>
    );
}