"use client"

import { Heart } from "@/components/ui/icons/heart"
import { CldImage, CldImageProps } from "next-cloudinary"
import { setAsfavoriteAction } from "../../app/action"
import { useState, useTransition } from "react"
import { SearchResult } from "../../app/page"
import { FullHeart } from "@/components/ui/icons/ful-heart"
import { ImageMenu } from "./image-menu"

export function CloudinaryImage(props:{imageData: SearchResult;  onUnhearted? : ( 
    unheartedResource : SearchResult
) => void 
 } & Omit<CldImageProps, 'src'> ) {
    const [transition, startTransition] = useTransition();
    const {imageData, onUnhearted} = props;
   
    const [isFavorited, setIsFavorited] =useState(
        imageData.tags.includes('favorite')
        )
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {
                isFavorited ? (
                <FullHeart
                onClick={() => {
                    onUnhearted?.(imageData)
                    setIsFavorited(false)
                    startTransition(() => {
                        setAsfavoriteAction(imageData.public_id, false)
                    })
                }}
                className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer" />
                 ) : (
                
                <Heart
                onClick={() => {
                    setIsFavorited(true)
                    startTransition(() => {
                        setAsfavoriteAction(imageData.public_id, true )
                    })
                }}
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
            )}
            <ImageMenu
            image = {imageData} />
        </div>
    )
}


