import Search from "@/app/components/search/Search";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('search');

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
            <Search translate={{
                all: t('all'),
                genre: t('genre'),
            }}/>
        </>
    );
}