import Search from "@/app/components/search/Search";

export default async function Page() {
    return (
        <>
            {/* <!--=====================================-->
            <!--=      Breadcrumb Area Start        =-->
            <!--=====================================--> */}
            <section className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="home.html">Anime</a></li>
                            <li><a className="active">List</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Search />
        </>
    );
}