"use client"
import UserSession from '@/app/models/auth/UserSession';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { portalServer } from "@/lib/services/client/baseUrl";
import ServerResponse from '@/app/models/common/ServerResponse';
import axiosClientApiInstance from '@/lib/services/client/interceptor';

const pushComment = async (commentData: any) => {
    try {
        const response = await axiosClientApiInstance.post<ServerResponse<any>>(portalServer + '/api/comment', commentData);
        return response.data;
    } catch (error) {
        return null;
    }
};

const getComments = async (queryParams: any) => {
    try {
        const response = await axiosClientApiInstance.get<ServerResponse<any>>(portalServer + '/api/comment', {
            params: queryParams,
        });
        return response.data.data;
    } catch (error) {
        return null;
    }
};


export default function CommentComic({ comicId }: { comicId: any }) {
    const t = useTranslations('comic_detail');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<any>();
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const userSession = useMemo<UserSession>(() => {
        const session = localStorage.getItem('userSession');
        return session ? JSON.parse(session) : null;
    }, []);

    const editorStyle = {
        width: '100%',
        marginBottom: '5vh',
        color: 'white',
    };

    const formatDate = (utcDate: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const formattedDate = new Date(utcDate).toLocaleString(undefined, options);
        return formattedDate;
    };

    const toggleReplies = () => {
        setIsOpen(!isOpen);
    };

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

    const handlePostReply = async (event: any) => {
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
                                                <img src="/assets/media/comment/comment-img-2.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-lg-11 col-10">
                                            <h5>
                                                <a href="profile.html">{cmt.userName}</a>
                                                {cmt.collectionId && <b className='relation-chap'>Chap 1</b>}
                                            </h5>
                                            <div dangerouslySetInnerHTML={{ __html: cmt.text }} />
                                            <span className='date-comment'>{formatDate(cmt.createdOnUtc)}</span>
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
                                                    <form onSubmit={handlePostComment}>
                                                        <div className="input-group form-group footer-email-box">
                                                            <ReactQuill style={editorStyle} theme="snow" value={comment} onChange={setComment} />
                                                        </div>
                                                        <button className="input-group-text post-btn" type="submit">
                                                            {t('post')}
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            {cmt.ReplyCount > 0 && <a
                                                className={`accordion-button comment-btn ${isOpen ? 'active' : ''}`}
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#reply${index}`}
                                                aria-expanded={isOpen}
                                                aria-controls={`reply${index}`}
                                                onClick={toggleReplies}
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
                                                        <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                            <div className="d-inline-flex align-items-start">
                                                                <a href="profile.html">
                                                                    <img
                                                                        src="/assets/media/comment/comment-img-sm-1.png"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="replies">
                                                                    <h5>
                                                                        <a href="profile.html">@username</a>{" "}
                                                                        <b>5 minutes ago</b>
                                                                    </h5>
                                                                    <p>
                                                                        At verooo eos et accusamus et iusto odio dignissimos
                                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                                        atque corrupti quos dolores et quas molestias.
                                                                    </p>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-up" />
                                                                    </a>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-down" />
                                                                    </a>
                                                                    <div
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
                                                                                    {t('Post')}
                                                                                </button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                            <div className="d-inline-flex align-items-start">
                                                                <a href="profile.html">
                                                                    <img
                                                                        src="/assets/media/comment/comment-img-sm-3.png"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="replies">
                                                                    <h5>
                                                                        <a href="profile.html">@username</a>{" "}
                                                                        <b>5 minutes ago</b>
                                                                    </h5>
                                                                    <p>
                                                                        At vero eos et accusamus et iusto odio dignissimos
                                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                                        atque corrupti quos dolores et quas molestias.
                                                                    </p>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-up" />
                                                                    </a>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-down" />
                                                                    </a>
                                                                    <button
                                                                        className=" accordion-button comment-btn"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#reply60"
                                                                        aria-expanded="true"
                                                                    >
                                                                        Reply
                                                                    </button>
                                                                    <div
                                                                        id="reply60"
                                                                        className="accordion-collapse collapse"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div className="card card-body">
                                                                            <div className="d-flex pt-3">
                                                                                <img
                                                                                    src="/assets/media/comment/comment-img-sm-1.png"
                                                                                    alt=""
                                                                                />
                                                                                <input type="text" placeholder="Add a reply" />
                                                                            </div>
                                                                            <div className="text-end">
                                                                                <form onSubmit={handlePostComment}>
                                                                                    <div className="input-group form-group footer-email-box">
                                                                                        <ReactQuill style={editorStyle} theme="snow" value={comment} onChange={setComment} />
                                                                                    </div>
                                                                                    <button className="input-group-text post-btn" type="submit">
                                                                                        {t('Post')}
                                                                                    </button>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                            <div className="d-inline-flex align-items-start">
                                                                <a href="profile.html">
                                                                    <img
                                                                        src="/assets/media/comment/comment-img-sm-4.png"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                                <div className="replies">
                                                                    <h5>
                                                                        <a href="profile.html">@username</a>{" "}
                                                                        <b>5 minutes ago</b>
                                                                    </h5>
                                                                    <p>
                                                                        At vero eos et accusamus et iusto odio dignissimos
                                                                        ducimus qui blanditiis praesentium voluptatum deleniti
                                                                        atque corrupti quos dolores et quas molestias.
                                                                    </p>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-up" />
                                                                    </a>
                                                                    <a href="manga-detail.html" className="comment-btn">
                                                                        <i className="fa fa-thumbs-down" />
                                                                    </a>
                                                                    <button
                                                                        className=" accordion-button comment-btn"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#reply7"
                                                                        aria-expanded="true"
                                                                    >
                                                                        Reply
                                                                    </button>
                                                                    <div
                                                                        id="reply7"
                                                                        className="accordion-collapse collapse"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div className="card card-body">
                                                                            <div className="d-flex pt-3">
                                                                                <img
                                                                                    src="/assets/media/comment/comment-img-sm-3.png"
                                                                                    alt=""
                                                                                />
                                                                                <input type="text" placeholder="Add a reply" />
                                                                            </div>
                                                                            <div className="text-end">
                                                                                <button className="comment-btn">Cencel</button>
                                                                                <button className="comment-btn active">
                                                                                    Reply
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                            <div
                                                                id="more"
                                                                className="accordion-collapse collapse "
                                                                data-bs-parent="#accordionExample"
                                                            >
                                                                <div className="card card-body">
                                                                    <div className="d-inline-flex align-items-start">
                                                                        <a href="profile.html">
                                                                            <img
                                                                                src="/assets/media/comment/comment-img-sm-2.png"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                        <div className="replies">
                                                                            <h5>
                                                                                <a href="profile.html">@username</a>{" "}
                                                                                <b>5 minutes ago</b>
                                                                            </h5>
                                                                            <p>
                                                                                At vero eos et accusamus et iusto odio dignissimos
                                                                                ducimus qui blanditiis praesentium voluptatum
                                                                                deleniti atque corrupti quos dolores et quas
                                                                                molestias.
                                                                            </p>
                                                                            <button className="comment-btn">
                                                                                <i className="fa fa-thumbs-up" />
                                                                            </button>
                                                                            <button className="comment-btn">
                                                                                <i className="fa fa-thumbs-down" />
                                                                            </button>
                                                                            <button
                                                                                className=" accordion-button comment-btn"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#reply9"
                                                                                aria-expanded="true"
                                                                            >
                                                                                Reply
                                                                            </button>
                                                                            <div
                                                                                id="reply9"
                                                                                className="accordion-collapse collapse "
                                                                                data-bs-parent="#accordionExample"
                                                                            >
                                                                                <div className="card card-body">
                                                                                    <div className="d-flex pt-3">
                                                                                        <img
                                                                                            src="/assets/media/comment/comment-img-sm-1.png"
                                                                                            alt=""
                                                                                        />
                                                                                        <input
                                                                                            type="text"
                                                                                            placeholder="Add a reply"
                                                                                        />
                                                                                    </div>
                                                                                    <div className="text-end">
                                                                                        <button className="comment-btn">
                                                                                            Cencel
                                                                                        </button>
                                                                                        <button className="comment-btn active">
                                                                                            Reply
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="manga-detail.html#"
                                                                className="accordion-button comment-btn active"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#more"
                                                                aria-expanded="true"
                                                                aria-controls="more"
                                                            >
                                                                <i className="fa fa-chevron-down" /> Show More Replies
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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