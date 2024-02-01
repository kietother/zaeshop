import dynamic from "next/dynamic";
import BannerComic from "../components/home/BannerComic";
import PopularComic from "../components/home/PopularComic";
import RecentlyUploadedComic from "../components/home/RecentlyUploadedComic";
import TopAreaComic from "../components/home/TopAreaComic";
const ScrollButton = dynamic(() => import('@/app/components/common/ScrollButton'), {
  ssr: false
});
export default function Home() {
  return (
    <>
        <ScrollButton />
        <BannerComic />
        <PopularComic />
        <RecentlyUploadedComic />
        <TopAreaComic />
    </>
  )
}
