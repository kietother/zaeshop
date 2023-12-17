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
                                <a href="home.html">Home</a>
                            </li>
                            <li>
                                <a href="home-3.html">All Manga</a>
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