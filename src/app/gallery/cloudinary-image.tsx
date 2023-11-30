"use client"

import { Heart } from "@/components/ui/icons/heart"
import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { setAsfavoriteAction } from "./action"
import { useTransition } from "react"
import { SearchResult } from "./page"
import { FullHeart } from "@/components/ui/icons/ful-heart"

export function CloudinaryImage(props: any & {imageData: SearchResult}) {
    const [transition, startTransition] = useTransition();
    const {imageData} = props;
    const isFavorited = imageData.tags.includes('favorite')
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {
                isFavorited ? (
                <FullHeart
                onClick={() => {
                    startTransition(() => {
                        setAsfavoriteAction(imageData.public_id, false)
                    })
                }}
                className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer" />
                 ) : (
                
                <Heart
                onClick={() => {
                    startTransition(() => {
                        setAsfavoriteAction(imageData.public_id, true )
                    })
                }}
                className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
            )}
            
        </div>
    )
}