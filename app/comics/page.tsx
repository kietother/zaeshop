import Breadcrumb from "../components/comics/Breadcrumb";
import ChapterComic from "../components/comics/ChapterComic";
import CommentComic from "../components/comics/CommentComic";
import InfomationComic from "../components/comics/InfomationComic";

export default function Comics() {
    return (
        <>
            <Breadcrumb />
            <InfomationComic />
            <ChapterComic />
            <CommentComic />
        </>
    );
}