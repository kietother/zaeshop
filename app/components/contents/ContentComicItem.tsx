"use client"
import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function ContentComicItem({ imageUrl, scrollPosition }: { imageUrl: string, scrollPosition: any }) {
    return (
        <div className="chapter-image col-lg-10 offset-lg-1 col-12 offset-0 img-chapter">
            <LazyLoadImage src={imageUrl}
                effect="blur"
                alt=""
                scrollPosition={scrollPosition}
                width={800}
                threshold={200}
            />
        </div>
    )
}

export default trackWindowScroll<any>(ContentComicItem);