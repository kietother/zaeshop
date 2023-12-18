import Image from "next/image";

export default function Header() {
    return (
        <header className="header style-1">
            <div className="container">
                {/* Start Mainmanu Nav */}
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="home.html">
                        <img src="/assets/media/logo.png" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto mainmenu">
                            <li className="menu-item-has-children">
                                <a href="home.html">Anime</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="home-2.html">Movie</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="home-3.html">Manga</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a
                                    href="manga-detail.html#Pages"
                                    className="dropdown-toggle"
                                    id="pages"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="pages">
                                    <li>
                                        <a href="home.html">Anime</a>
                                    </li>
                                    <li>
                                        <a href="home-2.html">Movie</a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">Manga</a>
                                    </li>
                                    <li>
                                        <a href="streaming-season.html">Streaming Season</a>
                                    </li>
                                    <li>
                                        <a href="streaming-movie.html">Streaming Movie</a>
                                    </li>
                                    <li>
                                        <a href="manga-detail.html" className="active">
                                            Manga Detail
                                        </a>
                                    </li>
                                    <li>
                                        <a href="manga-content.html">Manga Content </a>
                                    </li>
                                    <li>
                                        <a href="list-view.html">List View</a>
                                    </li>
                                    <li>
                                        <a href="grid-view.html">grid View</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-detail.html">Blog Detail</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html"> Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="comments.html"> Comments Policy </a>
                                    </li>
                                    <li>
                                        <a href="profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="edit-profile.html"> Edit Profile</a>
                                    </li>
                                    <li>
                                        <a href="watch-history.html">Watch History</a>
                                    </li>
                                    <li>
                                        <a href="playlist.html">Playlist</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Log In</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="reset-password.html">Reset Password</a>
                                    </li>
                                    <li>
                                        <a href="404.html">404</a>
                                    </li>
                                    <li>
                                        <a href="coming-soon.html"> Coming Soon</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form action="list-view.html">
                            <div className="input-group form-group header-search-box">
                                <button className="input-group-text anime-btn" type="submit">
                                    <i className="fal fa-search" />
                                </button>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="query"
                                    required={true}
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                        <div className="d-flex right-nav">
                            <a
                                href="signup.html"
                                className="anime-btn btn-dark border-change me-3"
                            >
                                SIGN UP
                            </a>
                            <a href="login.html" className="anime-btn btn-dark">
                                LOG IN
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}