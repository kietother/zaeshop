import { useTranslations } from 'next-intl';
export default function Breadcrumb({ title, friendlyName }: { title?: string, friendlyName?: string }) {
    const t = useTranslations('comic_detail');
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
                                <a href="/">
                                    {t('home_page')}
                                </a>
                            </li>
                            <li>
                                <a href="/truyen-tranh"> {t('explore')}</a>
                            </li>
                            <li>
                            <a href={`/truyen-tranh/${friendlyName}`} className="active">
                                {title}
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}