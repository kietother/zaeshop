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

export default function CommentComic({ comicId }: { comicId: any }) {
    const t = useTranslations('comic_detail');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<any>();
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reply, setReply] = useState('');

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
            CollectionId: null,
        };

        await pushComment(commentData);
        setComment('');
        setReloadTrigger((prev) => !prev);
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
                                                {cmt.collectionId && <b className='relation-chap'>Chap 1</b>}
                                            </h5>
                                            <div dangerouslySetInnerHTML={{ __html: cmt.text }} />
                                            <span className='date-comment'>{formatDateToLocale(cmt.createdOnUtc)}</span>
                                            <a href="manga-detail.html" className="comment-btn">
                                                <i className="fa fa-thumbs-up" />
                                            </a>
                                            <a href="manga-detail.html" className="comment-btn">
                                                <i className="fa fa-thumbs-down" />
                                            </a>
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
                                                    <form onSubmit={(event) => handlePostReply(event, cmt.id)}>
                                                        <div className="input-group form-group footer-email-box">
                                                            <ReactQuill style={editorStyle} theme="snow" value={reply} onChange={setReply} />
                                                        </div>
                                                        <button className="input-group-text post-btn" type="submit">
                                                            {t('post')}
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            {cmt.replyCount > 0 &&
                                                <ReplyComic
                                                    comicId={comicId}
                                                    commentId={cmt.id}
                                                    replyCount={cmt.replyCount}
                                                    isOpen={false}
                                                    index={index} />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 mt-lg-0 mt-3">
                            <h3 className="small-title">{t('similar')}</h3>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img src="/assets/media/anime-sm-img/anime-img-7.png" alt="" />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>86</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img src="/assets/media/anime-sm-img/anime-img-8.png" alt="" />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>Re-Zero</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                                <p className="text-box active">18+</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img src="/assets/media/anime-sm-img/anime-img-9.png" alt="" />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>Tokyo Ghoul</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img
                                                src="/assets/media/anime-sm-img/anime-img-10.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>Sword Art Online</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img
                                                src="/assets/media/anime-sm-img/anime-img-11.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>Sword Alicization</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img
                                                src="/assets/media/anime-sm-img/anime-img-12.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-9">
                                            <div className="anime-blog">
                                                <p>One Piece</p>
                                                <p className="text-box">dub 8</p>
                                                <p className="text-box">sub 12</p>
                                            </div>
                                        </div>
                                        <div className="p-0 col-1 show-type">
                                            <span className="show-type">TV</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}