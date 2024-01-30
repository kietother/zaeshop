"use client"
import UserSession from '@/app/models/auth/UserSession';
import { formatDateToLocale } from '@/lib/dayjs/format-date';
import { getComments, pushComment } from '@/lib/services/client/comment/commentService';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReplyComic from './ReplyComic';

const editorStyle = {
    width: '100%',
    marginBottom: '5vh',
    color: 'white',
};

export default function CommentComic({ comicId, collectionId }: { comicId: any, collectionId: any }) {
    const t = useTranslations('comic_detail');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<any>();
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(false);

    const userSession = useMemo<UserSession>(() => {
        const session = localStorage.getItem('userSession');
        return session ? JSON.parse(session) : null;
    }, []);

    const handlePostComment = async (event: any) => {
        event.preventDefault();
        if (comment.trim() === '') {
            return;
        }

        const commentData = {
            Text: comment,
            AlbumId: comicId,
            CollectionId: collectionId,
        };

        await pushComment(commentData);
        setComment('');
        setReloadTrigger((prev) => !prev);
    };

    useEffect(() => {
        const query = {
            albumId: comicId,
            pageNumber: 1,
            pageSize: 10,
            sortColumn: 'createdOnUtc',
            sortDirection: 'desc',
            isReply: false
        };

        setLoading(true);

        getComments(query)
            .then((response) => {
                if (response && response.data) {
                    setComments(response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching types:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [reloadTrigger]);


    return (
        <>
            {/*=====================================*/}
            {/*=         Comment Area Start        =*/}
            {/*=====================================*/}
            <section className="comment sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="comment-block">
                                <div className="heading style-1 m-0">
                                    <h2>{t('comments')}</h2>
                                </div>
                                <p>
                                    {t('We hope you have a good time browsing the comment section!')}<br />
                                    {t('Please read our')} <a href="comments.html">{t('Comment Policy')}</a> {t('before commenting')}.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-2">
                                    <a href="profile.html">
                                        <img src={userSession?.image ?? ''} alt="" />
                                    </a>
                                </div>
                                {userSession &&
                                    <div className="col-lg-11 col-10">
                                        <form onSubmit={handlePostComment}>
                                            <div className="input-group form-group footer-email-box">
                                                <ReactQuill
                                                    style={editorStyle}
                                                    theme="snow"
                                                    value={comment}
                                                    onChange={(content, delta, source, editor) => setComment(content)}
                                                    preserveWhitespace={true} />
                                            </div>
                                            <button className="input-group-text post-btn" type="submit">
                                                {t('post')}
                                            </button>
                                        </form>
                                    </div>}
                            </div>
                            <div className="site-comment">
                                {loading && <div className="spinner-border text-primary" role="status"></div>}
                                {comments?.map((cmt: any, index: number) => (
                                    <div key={index} className="row">
                                        <div className="col-lg-1 col-2">
                                            <a href="profile.html">
                                                <img src={cmt.avatar} alt="" />
                                            </a>
                                        </div>
                                        <div className="col-lg-11 col-10">
                                            <h5>
                                                <a href="profile.html">{cmt.userName}</a>
                                                {cmt.collectionId && <b className='relation-chap'><a href={`/truyen-tranh/${cmt.albumFriendlyName}/${cmt.friendlyName}`}>{cmt.title}</a></b>}
                                            </h5>
                                            <div dangerouslySetInnerHTML={{ __html: cmt.text }} />
                                            <span className='date-comment'>{formatDateToLocale(cmt.createdOnUtc)}</span>
                                            <a href="manga-detail.html" className="comment-btn">
                                                <i className="fa fa-thumbs-up" />
                                            </a>
                                            <a href="manga-detail.html" className="comment-btn">
                                                <i className="fa fa-thumbs-down" />
                                            </a>
                                            <ReplyComic
                                                comment={cmt}
                                                comicId={comicId}
                                                commentId={cmt.id}
                                                replyCount={cmt.replyCount}
                                                index={index} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}