import ContentResponse from "@/app/models/contents/ContentResponse";
import dayjs from "@/lib/dayjs/dayjs-custom";
import { useTranslations } from 'next-intl';

export default function ChapterComic({ contents }: { contents?: ContentResponse[] | null }) {
    const t = useTranslations('comic_detail');
    return (
        <>
            {/*=====================================*/}
            {/*=         Release Area Start         =*/}
            {/*=====================================*/}
            <section className="relese sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <h3 className="small-title">{t('chapter_list')}</h3>
                            {contents?.map((content, index) => (
                                <div key={index}>
                                    <h5 className="chapter-list">
                                        <a href={`/truyen-tranh/${content.albumFriendlyName}/${content.friendlyName}`}>{content.title}</a>
                                        <span>{dayjs.utc(content.createdOnUtc).local().format('DD-MM-YYYY HH:mm')}</span> 
                                        <p><i className="fas fa-eye"></i> {content.views.toLocaleString()}</p>
                                    </h5>
                                    <hr />
                                </div>
                            ))}                       
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 mt-lg-0 mt-3">
                            <h3 className="small-title">{t('top_rated')}</h3>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img src="/assets/media/manga-sm-img/manga-img-7.png" alt="" />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>86</p>
                                                <p className="text">Chapter 129</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img src="/assets/media/manga-sm-img/manga-img-8.png" alt="" />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>Re-Zero</p>
                                                <p className="text">Chapter 169</p>
                                                <p className="ms-2 me-0 text-box active">18+</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img src="/assets/media/manga-sm-img/manga-img-9.png" alt="" />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>Tokyo Ghoul</p>
                                                <p className="text">Chapter 279</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img
                                                src="/assets/media/manga-sm-img/manga-img-10.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>Sword Art Online</p>
                                                <p className="text">Chapter 223</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img
                                                src="/assets/media/manga-sm-img/manga-img-11.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>Sword Art Online: Alicization</p>
                                                <p className="text">Chapter 94</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img
                                                src="/assets/media/manga-sm-img/manga-img-12.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-0 col-8">
                                            <div className="anime-blog">
                                                <p>One Piece</p>
                                                <p className="text">Chapter 1016</p>
                                            </div>
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