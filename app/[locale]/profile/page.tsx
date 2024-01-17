import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect('/login');
    }

    return (
        <>
            {/*=====================================*/}
            {/*=      Breadcrumb Area Start        =*/}
            {/*=====================================*/}
            <section className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="home.html">Anime</a>
                            </li>
                            <li>
                                <a className="active">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*=====================================*/}
            {/*=      Profile Area Start        =*/}
            {/*=====================================*/}
            <section className="profile sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-12">
                            <div className="row pb-5">
                                <div className="col-lg-4 col-sm-6 col-12">
                                    <div className="img-box">
                                        <img src={session.user?.image ?? ''} alt="Avatar" className="rounded-circle shadow-4 px-2" />
                                    </div>
                                </div>
                                <div className="profile-seting col-lg-8 col-sm-6 col-12">
                                    <h5>{session.user?.name}</h5>
                                    <p>{session.user?.email?.split('@')[0]}</p>
                                    <p className="pb-3">{session.user?.email}</p>
                                    <a
                                        href="edit-profile.html"
                                        className="anime-btn btn-dark border-change"
                                    >
                                        EDIT PROFILE
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-0 col-sm-8 offset-sm-2 col-12">
                            <div className="profile-link bg-color-black">
                                <h5>Important Links</h5>
                                <a href="watch-history.html" className="pb-3">
                                    My watch Hisorty
                                </a>
                                <h5>Playlists</h5>
                                <a href="playlist.html">Watch Later</a>
                                <a href="home.html">Sci-fi Anime</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}