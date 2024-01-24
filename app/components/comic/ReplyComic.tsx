import { formatDateToLocale } from "@/lib/dayjs/format-date";
import { getComments } from "@/lib/services/client/comment/commentService";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReactQuill from "react-quill";

const editorStyle = {
    width: '100%',
    marginBottom: '5vh',
    color: 'white',
};

export default function ReplyComic({ comicId, commentId, replyCount, isOpen, index }: {
    comicId: number,
    commentId: number, replyCount: number,
    isOpen: boolean, index: number
}) {
    const t = useTranslations('comic_detail');
    const [replies, setReplies] = useState<any[]>([]);

    const toggleReplies = async () => {
        const query = {
            albumId: comicId,
            pageNumber: 1,
            pageSize: 10,
            sortColumn: 'createdOnUtc',
            sortDirection: 'desc',
            isReply: true,
            parentCommentId: commentId
        };

        var result = await getComments(query);
        setReplies(result.data);
    };

    return (
        <>
            {replyCount > 0 && <a
                className={`accordion-button comment-btn ${isOpen ? 'active' : ''}`}
                data-bs-toggle="collapse"
                data-bs-target={`#reply${index}`}
                aria-expanded={isOpen}
                aria-controls={`reply${index}`}
                onClick={() => toggleReplies()}
            >
                {t('view_more_replies')}
            </a>}
            <div
                id={`reply${index}`}
                className="accordion-collapse collapse "
                data-bs-parent={`#accordionExample${index}`}
            >
                <div className="card card-body">
                    <div className="row pt-3">
                        {replies?.map((rl: any, index: number) => (
                            <div key={index} className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                <div className="d-inline-flex align-items-start">
                                    <a href="profile.html">
                                        <img
                                            src="/assets/media/comment/comment-img-sm-1.png"
                                            alt=""
                                        />
                                    </a>
                                    <div className="replies">
                                        <h5>
                                            <a href="profile.html">{rl.userName}</a>{" "}
                                        </h5>
                                        <div dangerouslySetInnerHTML={{ __html: rl.text }} />
                                        <span className='date-comment'>{formatDateToLocale(rl.createdOnUtc)}</span>
                                        <a href="manga-detail.html" className="comment-btn">
                                            <i className="fa fa-thumbs-up" />
                                        </a>
                                        <a href="manga-detail.html" className="comment-btn">
                                            <i className="fa fa-thumbs-down" />
                                        </a>
                                        {/* <div
                                            id="reply30"
                                            className="accordion-collapse collapse"
                                            data-bs-parent={`accordionExample${index}`}
                                        >
                                            <div className="card card-body">
                                                <form onSubmit={handlePostComment}>
                                                    <div className="input-group form-group footer-email-box">
                                                        <ReactQuill style={editorStyle} theme="snow" value={comment} onChange={setComment} />
                                                    </div>
                                                    <button className="input-group-text post-btn" type="submit">
                                                        {t('post')}
                                                    </button>
                                                </form>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}