"use client"
import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

export function ContentComicItem({ imageUrl, scrollPosition }: { imageUrl: string, scrollPosition: any }) {
    return (
        <div className="chapter-image col-lg-10 offset-lg-1 col-12 offset-0">
            <LazyLoadImage src={imageUrl} 
                alt=""
                scrollPosition={scrollPosition}
            />
        </div>
    )
}

export default trackWindowScroll<any>(ContentComicItem);