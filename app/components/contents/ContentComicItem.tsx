"use client"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ContentComicItem({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="chapter-image col-lg-10 offset-lg-1 col-12 offset-0">
            <LazyLoadImage src={imageUrl} alt="" />
        </div>
    )
}