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
                            <li><a className="active">{t('search_list')}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Search translate={{
                all: t('all'),
                genre: t('genre'),
                year: t('year'),
                status: t('status')
            }}/>
        </>
    );
}