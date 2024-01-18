"use client";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher({ locale }: { locale: string }) {
    const pathName = usePathname();
    const t = useTranslations('header');

    return (
        <>
            <a
                className="dropdown-toggle hover"
                id="types"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                {t('language')}
            </a>
            <ul className="dropdown-menu" aria-labelledby="types">
                <li>
                    <Link locale="vi" href={pathName} className={locale === 'vi' ? 'active' : ''}>
                        {t('vietnamese')}
                    </Link>
                </li>
                <li>
                    <Link locale="en" href={pathName} className={locale === 'en' ? 'active' : ''}>
                        {t('english')}
                    </Link>
                </li>
            </ul>
        </>
    );
}