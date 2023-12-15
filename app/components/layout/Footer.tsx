export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main style-1">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 col-sm-12 col-12">
                            <div className="footer-widget">
                                <a href="home.html">
                                    <img alt="" src="assets/media/logo.png" />
                                </a>
                                <p className="mt-2 mb-5">
                                    Lorem ipsum dolor sit, amet consectetur <br /> adipisicing
                                    elit. Eum modi, possimus <br /> dolore saepe nobis itaque
                                    cupiditate <br /> veniam nostrum, provident quam, <br />{" "}
                                    nequeab dicta velit debitis cum unde <br /> recusandae. Fuga,
                                    consectetur.
                                </p>
                                <h6 className="mb-2">Join Us on</h6>
                                <ul className="social-icons">
                                    <li>
                                        <a href="home-3.html">
                                            <img alt="" src="assets/media/footer/reddit.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">
                                            <img alt="" src="assets/media/footer/discord.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">
                                            <img alt="" src="assets/media/footer/instagram.png" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="home-3.html">
                                            <img alt="" src="assets/media/footer/twitter.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12">
                            <div className="footer-widget align-middle">
                                <h6 className="m-0">GET NOTIFIED</h6>
                                <p className="light-text">
                                    Get emails for latest news about anime, and more.
                                </p>
                                <form action="home-3.html">
                                    <div className="input-group form-group footer-email-box">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="info@example.com"
                                        />
                                        <button
                                            className="input-group-text anime-btn"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                                <p className="text">
                                    By subscribing you agree to our terms and conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-color-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="footer-copyright">
                                <span className="copyright-text">
                                    © 2023. All rights reserved by{" "}
                                    <a href="home-3.html#">Animeloop</a>.
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="footer-bottom-link text-end">
                                <a href="privacy.html">Privacy Policy</a>
                                <a href="comments.html" className="ps-2">
                                    Comments Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}