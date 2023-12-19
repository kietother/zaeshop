import axios from 'axios';
import ContentComicItem from './ContentComicItem';

const getContent = async (comicid: string | null, contentid: string | null) => {
    try {
        const response = await axios.get<any>(`http://54.169.199.183:5288/api/client/ContentApp/comics/${comicid}/contents/${contentid}`);
        return response.data.data;
    }
    catch {
        return null;
    }
}

export default async function ContentComic({ comicid, contentid }: { comicid: string | null, contentid: string | null }) {
    const content = await getContent(comicid, contentid);
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
                    <div className="row mx-auto pt-4">
                        {content?.contentItems && content?.contentItems.map((item: any, index: number) => (
                            <ContentComicItem key={index} imageUrl={item.imageUrl} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}