export default function Breadcrumb() {
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
                                <a href="https://uiparadox.co.uk/templates/animeloop/demo/index.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="home-3.html">All Manga</a>
                            </li>
                            <li>
                                <a href="manga-detail.html">Solo Leveling</a>
                            </li>
                            <li>
                                <a className="active">Chapter 1</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}