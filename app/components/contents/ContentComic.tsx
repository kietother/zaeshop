export default function ContentComic() {
    return (
        <>
            {/*=====================================*/}
            {/*=        Chapter Area Start       	=*/}
            {/*=====================================*/}
            <section className="chapter sec-mar">
                <div className="container">
                    <div className="heading style-1">
                        <h2>Solo Leveling</h2>
                        <span>Chapter 179</span>
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
                                CHAPTER 1
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
                    <div className="row pt-4">
                        <div className="chapter-image col-lg-10 offset-lg-1 col-12 offset-0">
                            <img src="assets/media/chapter/image-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}