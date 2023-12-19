import ContentResponse from "@/app/models/contents/ContentResponse";

export default function Breadcrumb({ content }: { content?: ContentResponse | null }) {
    return (
        <>
            {/*=====================================*/}
            {/*=      Breadcrumb Area Start        =*/}
            {/*=====================================*/}
            <section className="breadcrumb ">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="/">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href="/truyen-tranh">Truyện tranh</a>
                            </li>
                            <li>
                                <a href={`/truyen-tranh/${content?.albumFriendlyName}`}>{content?.albumTitle}</a>
                            </li>
                            <li>
                                <a className="active">{content?.title}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}