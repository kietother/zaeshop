import dynamic from "next/dynamic";

const DynamicTopPage = dynamic(() => import('@/app/components/top-page/TopPage'), {
    ssr: false
});

export default function Page() {
    return (
        <DynamicTopPage />
    );
}