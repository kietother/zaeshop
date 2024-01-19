import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from 'next/navigation';
import dynamic from "next/dynamic";
import { getTranslations } from 'next-intl/server';

const DynamicLoginButton = dynamic(() => import("../../components/login/LoginButton"), {
    ssr: false
})

export default async function Login() {
    const t = await getTranslations('logins');
    const session = await getServerSession(authOptions);
    if (!!session) {
        return redirect('/');
    }

    return (
        <>
            {/*=====================================*/}
            {/*=        login Area Start          =*/}
            {/*=====================================*/}
            <section className="login text-center">
                <div className="container">
                    <div className="login-block">
                        <div className="login-content">
                            <h3>{t('login')}</h3>
                            <DynamicLoginButton />
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="check"
                                />
                                <label className="custom-control-label" htmlFor="check">
                                    {t('policy')}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}