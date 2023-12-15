export default function Comic() {
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
            {/*=====================================*/}
            {/*=         video Area Start          =*/}
            {/*=====================================*/}
            <section className="video sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-7 col-12">
                                    <div className="trailer-box">
                                        <img
                                            src="assets/media/manga/manga-img-1.png"
                                            alt=""
                                            className="image"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 col-12">
                                    <div className="trailer-content">
                                        <h2>Solo Leveling</h2>
                                        <p className="light-text">Chapter 179</p>
                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                            >
                                                <svg
                                                    width={32}
                                                    height={22}
                                                    viewBox="0 0 32 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        x="0.145264"
                                                        y="0.00012207"
                                                        width="21.4395"
                                                        height="2.68125"
                                                        rx="1.34062"
                                                        fill="#999999"
                                                    />
                                                    <rect
                                                        x="0.145264"
                                                        y="7.41272"
                                                        width="21.4395"
                                                        height="2.68125"
                                                        rx="1.34062"
                                                        fill="#999999"
                                                    />
                                                    <rect
                                                        x="0.145264"
                                                        y="14.8258"
                                                        width="16.4914"
                                                        height="2.68125"
                                                        rx="1.34062"
                                                        fill="#999999"
                                                    />
                                                    <path
                                                        d="M19.8784 16.0712C19.8784 15.4163 20.4093 14.8854 21.0642 14.8854H30.2463C30.9011 14.8854 31.432 15.4163 31.432 16.0712C31.432 16.7261 30.9011 17.257 30.2463 17.257H21.0642C20.4093 17.257 19.8784 16.7261 19.8784 16.0712Z"
                                                        fill="#999999"
                                                    />
                                                    <path
                                                        d="M25.6552 22.0001C25.0171 22.0001 24.4999 21.4828 24.4999 20.8447V11.2977C24.4999 10.6596 25.0171 10.1423 25.6552 10.1423C26.2933 10.1423 26.8106 10.6596 26.8106 11.2977V20.8447C26.8106 21.4828 26.2933 22.0001 25.6552 22.0001Z"
                                                        fill="#999999"
                                                    />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu bg-color-black pt-3 pb-3 ps-3 pe-3">
                                                <li>
                                                    <a href="manga-detail.html" className="none">
                                                        <i className="fa fa-check" /> Watch Later{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="manga-detail.html">
                                                        <i className="fas fa-plus" /> Add to Playlist{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>Plot Summary</h3>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias excepturi sint occaecati cupiditate
                                            non provident, similique sunt in culpa qui officia deserunt
                                            mollitia animi, id est laborum et dolorum fuga. Et harum
                                            quidem rerum facilis est et expedita distinctio.
                                        </p>
                                        <div className="d-flex pt-4">
                                            <a
                                                href="manga-content.html"
                                                className="anime-btn btn-dark border-change me-3"
                                            >
                                                READ FIRST
                                            </a>
                                            <a href="manga-content.html" className="anime-btn btn-dark">
                                                READ LAST
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="trailer-content">
                                <h3>Manga Detail</h3>
                                <p>
                                    <span>Author:</span> <b>Bones</b>
                                </p>
                                <p>
                                    <span>Artist:</span> <b>Bones</b>
                                </p>
                                <p>
                                    <span>Date of release:</span> Jan 15, 2023
                                </p>
                                <p>
                                    <span>Status:</span> <b>Completed</b>
                                </p>
                                <p>
                                    <span>Genre:</span> Action, School, Shounen
                                </p>
                                <p>
                                    <span>Country:</span> Japan
                                </p>
                                <p>
                                    <span>Scores:</span> 2.53 by 4,405 reviews
                                </p>
                                <p>
                                    <span>Views:</span> 18,284
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*=====================================*/}
            {/*=         Release Area Start         =*/}
            {/*=====================================*/}
            <section className="relese sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <h3 className="small-title">Manga Releases</h3>
                            <h5>
                                Chapter 179 <span>Sunday 01 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 178 <span>Sunday 02 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 177 <span>Monday 03 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 176 <span>Tuesday 04 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 175 <span>Wednesday 05 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 174 <span>Thursday 06 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 173 <span>Friday 07 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 172 <span>Saturday 08 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 171 <span>Sunday 09 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 170 <span>Monday 10 Jan 2023</span>
                            </h5>
                            <hr />
                            <h5>
                                Chapter 169 <span>Tuesday 11 Jan 2023</span>
                            </h5>
                            <hr />
                            <div className="text-center">
                                <a href="manga-detail.html#" className="relese-btn">
                                    Show More
                                </a>
                            </div>
                            <hr />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 mt-lg-0 mt-3">
                            <h3 className="small-title">Top Rated Manga</h3>
                            <div className="anime-box bg-color-black">
                                <a href="manga-detail.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-4">
                                            <img src="assets/media/manga-sm-img/manga-img-7.png" alt="" />
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
                                            <img src="assets/media/manga-sm-img/manga-img-8.png" alt="" />
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
                                            <img src="assets/media/manga-sm-img/manga-img-9.png" alt="" />
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
                                                src="assets/media/manga-sm-img/manga-img-10.png"
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
                                                src="assets/media/manga-sm-img/manga-img-11.png"
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
                                                src="assets/media/manga-sm-img/manga-img-12.png"
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
            {/*=====================================*/}
            {/*=         Comment Area Start        =*/}
            {/*=====================================*/}
            <section className="comment sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="comment-block">
                                <div className="heading style-1 m-0">
                                    <h2>COMMENTS</h2>
                                </div>
                                <p>
                                    We hope you have a good time browsing the comment section! <br />
                                    Please read our <a href="comments.html">Comment Policy</a> before
                                    commenting.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-1 col-2">
                                    <a href="profile.html">
                                        <img src="assets/media/comment/comment-img.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-11 col-10">
                                    <form action="manga-detail.html">
                                        <div className="input-group form-group footer-email-box">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="post"
                                                placeholder="Join the discussion"
                                            />
                                            <button className="input-group-text post-btn" type="submit">
                                                Post
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="site-comment">
                                <div className="row">
                                    <div className="col-lg-1 col-2">
                                        <a href="profile.html">
                                            <img src="assets/media/comment/comment-img-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-lg-11 col-10">
                                        <h5>
                                            <a href="profile.html">@username</a>
                                            <b>5 minutes ago</b>
                                        </h5>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias.
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
                                            data-bs-target="#reply1"
                                            aria-expanded="true"
                                        >
                                            Reply
                                        </button>
                                        <div
                                            id="reply1"
                                            className="accordion-collapse collapse "
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="card card-body">
                                                <div className="d-flex pt-3">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-2.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <input type="text" placeholder="Add a reply" />
                                                </div>
                                                <div className="text-end">
                                                    <button className="comment-btn">Cencel</button>
                                                    <button className="comment-btn active">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-1 col-2">
                                        <a href="profile.html">
                                            <img src="assets/media/comment/comment-img-3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-lg-11 col-10">
                                        <h5>
                                            <a href="profile.html">@username</a> <b>5 minutes ago</b>
                                        </h5>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias.
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
                                            data-bs-target="#reply2"
                                            aria-expanded="true"
                                        >
                                            Reply
                                        </button>
                                        <div
                                            id="reply2"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="card card-body">
                                                <div className="d-flex pt-3">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-1.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <input type="text" placeholder="Add a reply" />
                                                </div>
                                                <div className="text-end">
                                                    <button className="comment-btn">Cencel</button>
                                                    <button className="comment-btn active">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="manga-detail.html#"
                                    className="accordion-button comment-btn active"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#reply"
                                    aria-expanded="true"
                                    aria-controls="reply"
                                >
                                    <i className="fa fa-chevron-up" /> 40 Replies
                                </a>
                                <div
                                    id="reply"
                                    className="accordion-collapse collapse show "
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="card card-body">
                                        <div className="row pt-3">
                                            <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-1.png"
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
                                                            data-bs-target="#reply30"
                                                            aria-expanded="true"
                                                        >
                                                            Reply
                                                        </button>
                                                        <div
                                                            id="reply30"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="card card-body">
                                                                <div className="d-flex pt-3">
                                                                    <img
                                                                        src="assets/media/comment/comment-img-sm-2.png"
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
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-3.png"
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
                                                                        src="assets/media/comment/comment-img-sm-1.png"
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
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-4.png"
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
                                                                        src="assets/media/comment/comment-img-sm-3.png"
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
                                                                    src="assets/media/comment/comment-img-sm-2.png"
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
                                                                                src="assets/media/comment/comment-img-sm-1.png"
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
                                <div className="row">
                                    <div className="col-lg-1 col-2">
                                        <a href="profile.html">
                                            <img src="assets/media/comment/comment-img-4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-lg-11 col-10">
                                        <h5>
                                            <a href="profile.html">@username</a> <b>5 minutes ago</b>
                                        </h5>
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                                            dolores et quas molestias.
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
                                            data-bs-target="#reply3"
                                            aria-expanded="true"
                                        >
                                            Reply
                                        </button>
                                        <div
                                            id="reply3"
                                            className="accordion-collapse collapse "
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="card card-body">
                                                <div className="d-flex pt-3">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-1.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <input type="text" placeholder="Add a reply" />
                                                </div>
                                                <div className="text-end">
                                                    <button className="comment-btn">Cencel</button>
                                                    <button className="comment-btn active">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="manga-detail.html#"
                                    className="accordion-button comment-btn active"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#reply20"
                                    aria-expanded="true"
                                >
                                    <i className="fa fa-chevron-down" /> 40 Replies
                                </a>
                                <div
                                    id="reply20"
                                    className="accordion-collapse collapse "
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="card card-body">
                                        <div className="row pt-3">
                                            <div className="col-lg-11 offset-lg-1 offset-2 col-10 pb-4">
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-3.png"
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
                                                            data-bs-target="#reply4"
                                                            aria-expanded="true"
                                                            aria-controls="reply"
                                                        >
                                                            Reply
                                                        </button>
                                                        <div
                                                            id="reply4"
                                                            className="accordion-collapse collapse  "
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="card card-body">
                                                                <div className="d-flex pt-3">
                                                                    <img
                                                                        src="assets/media/comment/comment-img-sm-2.png"
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
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-1.png"
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
                                                            data-bs-target="#reply5"
                                                            aria-expanded="true"
                                                            aria-controls="reply"
                                                        >
                                                            Reply
                                                        </button>
                                                        <div
                                                            id="reply5"
                                                            className="accordion-collapse collapse  "
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="card card-body">
                                                                <div className="d-flex pt-3">
                                                                    <img
                                                                        src="assets/media/comment/comment-img-sm-1.png"
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
                                                <div className="d-inline-flex align-items-start">
                                                    <a href="profile.html">
                                                        <img
                                                            src="assets/media/comment/comment-img-sm-3.png"
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
                                                            data-bs-target="#reply6"
                                                            aria-expanded="true"
                                                            aria-controls="reply"
                                                        >
                                                            Reply
                                                        </button>
                                                        <div
                                                            id="reply6"
                                                            className="accordion-collapse collapse  "
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="card card-body">
                                                                <div className="d-flex pt-3">
                                                                    <img
                                                                        src="assets/media/comment/comment-img-sm-2.png"
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
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href="manga-detail.html#" className="comment-btn">
                                        Load More Comment
                                    </a>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 mt-lg-0 mt-3">
                            <h3 className="small-title">SIMILAR</h3>
                            <div className="anime-box bg-color-black">
                                <a href="streaming-season.html">
                                    <div className="row m-0">
                                        <div className="p-0 col-2">
                                            <img src="assets/media/anime-sm-img/anime-img-7.png" alt="" />
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
                                            <img src="assets/media/anime-sm-img/anime-img-8.png" alt="" />
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
                                            <img src="assets/media/anime-sm-img/anime-img-9.png" alt="" />
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
                                                src="assets/media/anime-sm-img/anime-img-10.png"
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
                                                src="assets/media/anime-sm-img/anime-img-11.png"
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
                                                src="assets/media/anime-sm-img/anime-img-12.png"
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
    );
}