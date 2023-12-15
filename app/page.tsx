import Link from "next/link";

export default function Home() {
  return (
    <>
        {/*=====================================*/}
        {/*=        Banner Area Start          =*/}
        {/*=====================================*/}
        <section className="banner style-3">
          <div className="container-fluid">
            <div className="container">
              <div className=" banner-block bg-color-black">
                <div className="row">
                  <div className="col-lg-5 col-sm-5 col-12 d-flex align-items-center">
                    <div className="banner-content">
                      <h2 className="title">ONE PIECE</h2>
                      <p className="text">VOLUME 104</p>
                      <p className="text">CHAPTER 1016</p>
                      <div className="tag-box">
                        <a href="manga-detail.html" className="text-box active">
                          pg-13
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          dub
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          sub
                        </a>
                      </div>
                      <p className="light-text">APRIL 07, 2023</p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-7 col-12 ">
                    <img
                      src="assets/media/banner/banner-img-4.png"
                      className="dignole-img show-img"
                      alt=""
                    />
                    <img
                      src="assets/media/banner/banner-img-7.png"
                      className="dignole-img hide-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="banner-block bg-color-black">
                <div className="row">
                  <div className="col-lg-7 col-sm-7 col-12">
                    <img
                      src="assets/media/banner/banner-img-5.png"
                      className="dignole-img show-img"
                      alt=""
                    />
                    <img
                      src="assets/media/banner/banner-img-8.png"
                      className="dignole-img hide-img"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5 col-sm-5 col-12 d-flex align-items-center">
                    <div className="banner-content text-end">
                      <h2 className="title">THAT TIME I GOT A SLIME</h2>
                      <p className="text">VOLUME 104</p>
                      <p className="text pe-0">CHAPTER 1016</p>
                      <div className="tag-box">
                        <a
                          href="manga-detail.html"
                          className="text-box active ms-2"
                        >
                          pg-13
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          dub
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          sub
                        </a>
                      </div>
                      <p className="light-text">APRIL 07, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-block bg-color-black mb-0">
                <div className="row">
                  <div className="col-lg-5 col-sm-5 col-12 d-flex align-items-center">
                    <div className="banner-content">
                      <h2 className="title">SOLO LEVELING</h2>
                      <p className="text">VOLUME 104</p>
                      <p className="text">CHAPTER 1016</p>
                      <div className="tag-box">
                        <a href="manga-detail.html" className="text-box active">
                          pg-13
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          dub
                        </a>
                        <a href="manga-detail.html" className="text-box">
                          sub
                        </a>
                      </div>
                      <p className="light-text">APRIL 07, 2023</p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-7 col-12">
                    <img
                      src="assets/media/banner/banner-img-6.png"
                      className="dignole-img show-img"
                      alt=""
                    />
                    <img
                      src="assets/media/banner/banner-img-9.png"
                      className="dignole-img hide-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=        Recent Area Start          =*/}
        {/*=====================================*/}
        <section className="recent style-2 sec-mar">
          <div className="container">
            <div className="heading style-1">
              <h2>
                Popular Manga<span>Sunday 01 Jan 2023</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <Link href={"/comic"}>
                    <img src="assets/media/manga/manga-img-2.png" alt="" />
                  </Link>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Solo Leveling</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-1.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Full metal Alchemist</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-3.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Hunter x Hunter</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-4.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Kiznaiver</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-5.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Code Geas</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-6.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Dragon Ball Z Super</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-7.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>My Hero Academia</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-8.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>One Piece</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=        Coming out Area Start     =*/}
        {/*=====================================*/}
        <section className="coming-out style-2 sec-mar sec-pad">
          <div className="container">
            <div className="comingOut-content">
              <div className="title">SPY X FAMILY</div>
              <div className="tag-box">
                <a href="manga-detail.html" className="text-box active">
                  pg-13
                </a>
                <a href="manga-detail.html" className="text-box white">
                  dub
                </a>
                <a href="manga-detail.html" className="text-box white">
                  sub
                </a>
              </div>
              <p className="copyright-text">NEW CHAPTER COMING OUT</p>
              <ul className="timer countdown">
                <li>
                  29<small>d</small>
                </li>
                <li>
                  23<small>h</small>
                </li>
                <li>
                  50<small>m</small>
                </li>
                <li>
                  34<small>s</small>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=        Popular Anime Area Start =*/}
        {/*=====================================*/}
        <section className="popular style-2  sec-mar">
          <div className="container">
            <div className="heading style-1">
              <h2>Recently Uploaded</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-9.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Bleach</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-10.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Spy X Family</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-11.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Naruto</p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="anime-blog">
                  <a href="manga-detail.html">
                    <img src="assets/media/manga/manga-img-12.png" alt="" />
                  </a>
                  <div className="d-flex justify-content-between">
                    <p className="text">Chapter 179</p>
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
                  </div>
                  <a href="manga-detail.html">
                    <p>Summer Time</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=        Schedule Area Start        =*/}
        {/*=====================================*/}
        <section className="schedule style-1 sec-mar">
          <div className="container">
            <div className="heading style-1">
              <h2>weekly schedule</h2>
            </div>
            <div className="schedule-box">
              <div className="card">
                <div className="card-header">
                  <ul
                    className="date-slider nav nav-tabs card-header-tabs"
                    data-bs-tabs="tabs"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link text-center active"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#sunday"
                      >
                        <p>jan 1</p>
                        <h2>Sun</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#monday"
                      >
                        <p>jan 2</p>
                        <h2>Mon</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#tuesday"
                      >
                        <p>jan 3</p>
                        <h2>Tue</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#wednesday"
                      >
                        <p>jan 4</p>
                        <h2>Wed</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#thursday"
                      >
                        <p>jan 5</p>
                        <h2>thu</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#friday"
                      >
                        <p>jan 6</p>
                        <h2>fri</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#saturday"
                      >
                        <p>jan 7</p>
                        <h2>sat</h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-center"
                        aria-current="true"
                        data-bs-toggle="tab"
                        href="home-3.html#sunday"
                      >
                        <p>jan 8</p>
                        <h2>sun</h2>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body style-1 tab-content">
                  <div className="row justify-content-between mb-3">
                    <div className="col-lg-2 col-md-3 col-sm-3 col-0">
                      <h4>Anime Details</h4>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-9 col-12">
                      <ul className="timer countdown text-center">
                        <li>
                          29<small>d</small>
                        </li>
                        <li>
                          23<small>h</small>
                        </li>
                        <li>
                          50<small>m</small>
                        </li>
                        <li>
                          34<small>s</small>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-0 col-0 text-end">
                      <h4>Episode</h4>
                    </div>
                  </div>
                  <div className="tab-pane active" id="sunday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0 ">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="monday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="tuesday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="wednesday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="thursday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="friday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="tab-pane" id="saturday">
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">12:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-1.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Darling in the Franxx!
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 04</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">14:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-2.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Plastic Memories</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 06</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">23:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-3.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  That Time I Reincarnated As a Slime Season 2
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 12</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">22:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-4.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">
                                  Assassination Classroom
                                </p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 09</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">19:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-5.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">Chainsaw Man</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-3 col-0">
                              <p className="text text-end">TV</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 20</p>
                        </div>
                      </div>
                    </a>
                    <hr />
                    <a href="streaming-season.html">
                      <div className="row  align-items-center">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-0">
                          <p className="text">07:00</p>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-10 col-12">
                          <div className="row  align-items-center">
                            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3 ps-0 pe-0 text-end">
                              <img
                                src="assets/media/anime-sm-img/anime-img-6.png"
                                alt=""
                              />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-9">
                              <div className="schedule-content align-middle">
                                <p className="small-title">No Game No Life Zero</p>
                                <p className="text-box">dub 8</p>
                                <p className="text-box">sub 12</p>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <p className="align col-2-middle">Movie</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-0 text-end">
                          <p className="text">Episode 22</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=           top Area Start          =*/}
        {/*=====================================*/}
        <section className="top sec-mar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-0 offset-sm-2 col-12">
                <h3>Recently Completed</h3>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-1.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>Darling in the Franxx!</p>
                          <p className="text">Chapter 120</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-2.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>Plastic Memories</p>
                          <p className="text">Chapter 150</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-3.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>That Time I Reincarnated</p>
                          <p className="text">Chapter 379</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-4.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>Assassination Classroom</p>
                          <p className="text">Chapter 199</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-5.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>Chainsaw Man</p>
                          <p className="text">Chapter 79</p>
                          <p className="text-box active ms-2 me-0">18+</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-6.png"
                          alt=""
                        />
                      </div>
                      <div className="p-0 col-8">
                        <div className="anime-blog">
                          <p>No Game No Life Zero</p>
                          <p className="text">Chapter 159</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-0 offset-sm-2 col-12">
                <h3>New</h3>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-7.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-8.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-9.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
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
                <div className="anime-box style-2 bg-color-black">
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
                <div className="anime-box style-2 bg-color-black">
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
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 col-12">
                <h3>Top Rated Manga</h3>
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-7.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-8.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
                  <a href="manga-detail.html">
                    <div className="row m-0">
                      <div className="p-0 col-4">
                        <img
                          src="assets/media/manga-sm-img/manga-img-9.png"
                          alt=""
                        />
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
                <div className="anime-box style-2 bg-color-black">
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
                <div className="anime-box style-2 bg-color-black">
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
                <div className="anime-box style-2 bg-color-black">
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
        {/*=           Blog Area Start         =*/}
        {/*=====================================*/}
        <section className="blog style-1 sec-mar">
          <div className="container">
            <div className="heading style-1">
              <h2>Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-0 offset-sm-2 col-12">
                <a href="blog-detail.html" className="inner-box">
                  <div className="image-box">
                    <img
                      src="assets/media/blog/blog-img-1.png"
                      alt=""
                      className="attachment-full size-full"
                    />
                  </div>
                  <div className="author-box text-start">
                    <div className="detail d-flex align-items-center justify-content-between">
                      <p>28 NOV 2022</p>
                      <p>Anime</p>
                    </div>
                    <h4>Why One piece’s 948th Episode </h4>
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/media/comment/comment-img.png"
                        className="w-auto"
                        alt=""
                      />
                      <h5>Author’s Name</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-0 offset-sm-2 col-12">
                <a href="blog-detail.html" className="inner-box">
                  <div className="image-box">
                    <img
                      src="assets/media/blog/blog-img-2.png"
                      alt=""
                      className="attachment-full size-full"
                    />
                  </div>
                  <div className="author-box text-start">
                    <div className="detail d-flex align-items-center justify-content-between">
                      <p>29 NOV 2022</p>
                      <p>Manga</p>
                    </div>
                    <h4>ANime Community Going mad </h4>
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/media/comment/comment-img-4.png"
                        className="w-auto"
                        alt=""
                      />
                      <h5>Author’s Name</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 col-12">
                <a href="blog-detail.html" className="inner-box">
                  <div className="image-box">
                    <img
                      src="assets/media/blog/blog-img-3.png"
                      alt=""
                      className="attachment-full size-full"
                    />
                  </div>
                  <div className="author-box text-start">
                    <div className="detail d-flex align-items-center justify-content-between">
                      <p>30 NOV 2022</p>
                      <p>Anime</p>
                    </div>
                    <h4>Tokyo Ghoul 2nd Season Review</h4>
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/media/comment/comment-img-3.png"
                        className="w-auto"
                        alt=""
                      />
                      <h5>Author’s Name</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
