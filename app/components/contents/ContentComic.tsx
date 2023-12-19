import ContentResponse from '@/app/models/contents/ContentResponse';
import ContentComicItem from './ContentComicItem';

export default async function ContentComic({ content }: { content?: ContentResponse | null}) {
    return (
        <>
            {/*=====================================*/}
            {/*=        Chapter Area Start       	=*/}
            {/*=====================================*/}
            <section className="chapter sec-mar">
                <div className="container">
                    <div className="heading style-1">
                        <h2>{content?.albumTitle}</h2>
                        <span>{content?.title}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <div className="left">
                            <a
                                href="manga-content.html"
                                className="anime-btn btn-dark border-change dropdown-toggle"
                                id="country"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                {content?.title}
                                <span>
                                    <i className="fa fa-chevron-down" />
                                </span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="country">
                                <li>
                                    <a href="manga-content.html"> chapter 1 </a>
                                </li>
                                <li>
                                    <a href="manga-content.html"> chapter 2 </a>
                                </li>
                                <li>
                                    <a href="manga-content.html"> chapter 3 </a>
                                </li>
                                <li>
                                    <a href="manga-content.html"> chapter 4 </a>
                                </li>
                                <li>
                                    <a href="manga-content.html"> chapter 5 </a>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <a href="manga-content.html" className="anime-btn btn-dark">
                                PREVIOUS
                            </a>
                            <a
                                href="manga-content.html"
                                className="anime-btn btn-dark border-change ms-1"
                            >
                                NEXT
                            </a>
                        </div>
                    </div>
                    <div className="row text-center pt-4">
                        {content?.contentItems && content?.contentItems.map((item: any, index: number) => (
                            <ContentComicItem key={index} imageUrl={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}