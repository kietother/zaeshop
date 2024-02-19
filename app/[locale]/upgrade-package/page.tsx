import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('upgrade_account'),
        description: t('upgrade_account_description')
    };
}

const DynamicUpgradePackagePage = dynamic(() => import('@/app/components/upgrade-package/UpgradePackagePage'), {
    ssr: false
});

export default async function Page() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect('/login');
    }
    return (
        <DynamicUpgradePackagePage session={session} />
    );
}