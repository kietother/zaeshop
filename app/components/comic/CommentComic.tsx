"use client"
import UserSession from '@/app/models/auth/UserSession';
import { getComments, pushComment } from '@/lib/services/client/comment/commentService';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReplyComic from './ReplyComic';
import { getHoverText, getHoverTextValue, getLevelBadgeClass, getRoleBadge, getUserClass, getUserNameClass } from '@/app/utils/HelperFunctions';
import dayjs from "@/lib/dayjs/dayjs-custom";

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
    const [pagingParams, setPagingParams] = useState<any>({
        albumId: comicId,
        pageNumber: 1,
        pageSize: 5,
        sortColumn: 'createdOnUtc',
        sortDirection: 'desc',
        isReply: false
    });
    const [totalPages, setTotalPages] = useState<any>();

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
        setLoading(true);

        getComments(pagingParams)
            .then((response) => {
                if (response && response.data) {
                    setTotalPages(Math.ceil(response.rowNum / pagingParams.pageSize));
                    setComments(response.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching types:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [reloadTrigger, pagingParams]);

    const scrollUpByPercentage = (percentage: number) => {
        const currentPosition = window.scrollY || document.documentElement.scrollTop;
        const newPosition = currentPosition - percentage * window.innerHeight / 100;
        const scrollToPosition = Math.max(newPosition, 0);
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    };

    const handlePageClick = (page: number) => {
        setPagingParams({ ...pagingParams, pageNumber: page });
        scrollUpByPercentage(80);
    };
    
    const handlePrevClick = () => {
        const prevPage = pagingParams.pageNumber - 1;
        if (prevPage >= 1) {
            setPagingParams({ ...pagingParams, pageNumber: prevPage });
            scrollUpByPercentage(80);
        }
    };

    const handleNextClick = () => {
        const nextPage = pagingParams.pageNumber + 1;
        if (nextPage <= totalPages) {
            setPagingParams({ ...pagingParams, pageNumber: nextPage });
            scrollUpByPercentage(80);
        }
    };

    const renderPagination = useMemo(() => {
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        return (
            <ul className="pagination">
                <li className="page-item">
                    <a className="hover page-link arrow" aria-label="Previous" onClick={handlePrevClick}>
                        <i className="fa fa-chevron-left"></i>
                    </a>
                </li>
                {pages.map((page) => (
                    <li key={page} className="page-item">
                        <a className={`hover page-link ${page === pagingParams.pageNumber ? 'active' : ''}`} onClick={() => handlePageClick(page)}>{page}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="hover page-link arrow" aria-label="Next" onClick={handleNextClick}>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </li>
            </ul>
        );
    }, [pagingParams.pageNumber, totalPages]);

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
                                    {t('Please read our')} <a href="#">{t('Comment Policy')}</a> {t('before commenting')}.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-2">
                                    <a href="#">
                                        <img src={userSession?.image ?? ''} alt="" />
                                    </a>
                                </div>
                                {
                                    userSession ? (
                                        <div className="col-lg-11 col-10">
                                            <form onSubmit={handlePostComment}>
                                                <div className="input-group form-group footer-email-box">
                                                    <ReactQuill
                                                        style={editorStyle}
                                                        theme="snow"
                                                        value={comment}
                                                        onChange={(content, delta, source, editor) => setComment(content)}
                                                        preserveWhitespace={true}
                                                    />
                                                </div>
                                                <button className="input-group-text post-btn" type="submit">
                                                    {t('post')}
                                                </button>
                                            </form>
                                        </div>
                                    ) : (
                                        <p>
                                            {t('please_login')}...
                                        </p>
                                    )
                                }
                            </div>
                            <div className="site-comment">
                                {loading && <div className="spinner-border text-primary" role="status"></div>}
                                {comments?.map((cmt: any, index: number) => (
                                    <div key={index} className="row">
                                        <div className="col-lg-1 col-2">
                                            <a data-hover-text={getHoverText(cmt.roleType)} className={getUserClass(cmt.roleType)}>
                                                <img src={cmt.avatar} alt="" />
                                                <span className={getLevelBadgeClass(cmt.roleType)}>Base</span>
                                                <div className="hover-text">{getHoverTextValue(cmt.roleType)}</div>
                                            </a>
                                        </div>
                                        <div className="col-lg-11 col-10">
                                            <h5>
                                                {getRoleBadge(cmt.roleType)}
                                                <a href="#" className={getUserNameClass(cmt.roleType)}>{cmt.userName}</a>
                                                {cmt.collectionId && <b className='relation-chap'><a href={`/truyen-tranh/${cmt.albumFriendlyName}/${cmt.friendlyName}`}>{cmt.title}</a></b>}
                                            </h5>
                                            <div dangerouslySetInnerHTML={{ __html: cmt.text }} />
                                            <span className='date-comment'>{dayjs.utc(cmt.createdOnUtc).local().format('DD-MM-YYYY HH:mm')}</span>
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
                            <div className="pagination-wrape">
                                {renderPagination}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}