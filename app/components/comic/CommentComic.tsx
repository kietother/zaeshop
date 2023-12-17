export default function CommentComic() {
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
    )
}