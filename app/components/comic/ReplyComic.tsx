import { formatDateToLocale } from "@/lib/dayjs/format-date";
import { getComments, pushComment } from "@/lib/services/client/comment/commentService";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

const editorStyle = {
    width: '100%',
    marginBottom: '5vh',
    color: 'white',
};

export default function ReplyComic({ comment, comicId, commentId, replyCount, index }: {
    comment: any,
    comicId: number,
    commentId: number, replyCount: number,
    index: number
}) {
    const t = useTranslations('comic_detail');
    const [replies, setReplies] = useState<any[]>([]);
    const [reply, setReply] = useState('');
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (replyCount > 0) {
            const query = {
                albumId: comicId,
                pageNumber: 1,
                pageSize: 10,
                sortColumn: 'createdOnUtc',
                sortDirection: 'desc',
                isReply: true,
                parentCommentId: commentId
            };

            setLoading(true);

            getComments(query)
                .then((response) => {
                    if (response && response.data) {
                        setReplies(response.data);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching types:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [reloadTrigger, replyCount]);

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

    const handlePostReply = async (event: any, commentId: any) => {
        event.preventDefault();
        if (reply.trim() === '') {
            return;
        }

        const commentData = {
            Text: reply,
            AlbumId: comicId,
            CollectionId: null,
            ParentCommentId: commentId
        };

        await pushComment(commentData);
        setReply('');
        setReloadTrigger((prev) => !prev);
    };

    const scrollToReplyEditor = () => {
        const section = document.querySelector(`#reply${index}1`);
        if (section) {
            if (!section.classList.contains('shake-highlight')) {
                section.classList.add('shake-highlight');

                setTimeout(() => {
                    section.classList.remove('shake-highlight');
                }, 1000);
            }
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <button
                className=" accordion-button comment-btn"
                data-bs-toggle="collapse"
                data-bs-target={`#reply${index}1`}
                aria-expanded="true"
            >
                {t('reply')}
            </button>
            <div
                id={`reply${index}1`}
                className="accordion-collapse collapse "
                data-bs-parent={`#accordionExample${index}1`}
            >
                <div className="card card-body">
                    <form onSubmit={(event) => handlePostReply(event, comment.id)}>
                        <div className="input-group form-group footer-email-box">
                            <ReactQuill style={editorStyle} theme="snow" value={reply} onChange={setReply} />
                        </div>
                        <button className="input-group-text post-btn" type="submit">
                            {t('post')}
                        </button>
                    </form>
                </div>
            </div>
            {loading && <div className="spinner-border text-primary" role="status"></div>}
            {!loading && replyCount > 0 && <a
                className={'accordion-button comment-btn active'}
                data-bs-toggle="collapse"
                data-bs-target={`#reply${index}`}
                aria-expanded={true}
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
                        {replies?.map((rl: any, rlIndex: number) => (
                            <div key={rlIndex} className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                <div className="d-inline-flex align-items-start">
                                    <a href="profile.html">
                                        <img
                                            className="avatar-reply"
                                            src={rl.avatar}
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
                                        <button
                                            className=" accordion-button comment-btn"
                                            data-bs-toggle=""
                                            data-bs-target={`#reply${index}1`}
                                            aria-expanded="true"
                                            onClick={scrollToReplyEditor}
                                        >
                                            {t('reply')}
                                        </button>
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