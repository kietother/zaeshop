export default function Breadcrumb() {
    return (
        <>
            {/*=====================================*/}
            {/*=      Breadcrumb Area Start        =*/}
            {/*=====================================*/}
            <section className="breadcrumb sec-mar">
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
                                <a className="active">Solo Leveling</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}