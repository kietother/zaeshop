import BannerComic from "./components/home/BannerComic";
import PopularComic from "./components/home/PopularComic";
import RecentlyUploadedComic from "./components/home/RecentlyUploadedComic";
import TopAreaComic from "./components/home/TopAreaComic";

export default function Home() {
  return (
    <>
        <BannerComic />
        <PopularComic />
        <RecentlyUploadedComic />
        <TopAreaComic />
    </>
  )
}
