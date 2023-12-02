"use client"


import { CloudinaryImage } from "../../../components/ui/cloudinary-image"
import { ImageGrid } from "@/components/ui/image-grid"
import { SearchResult } from "../../gallery/page";




export default  function AlbumGrid({images} : {images : SearchResult[]}) {
 
    return (
     
                <ImageGrid
                    images={images}
                    getImage={(imageData: SearchResult) => {
                        return (
                            <CloudinaryImage
                                key={imageData.public_id}
                                imageData={imageData}
                                width="400"
                                height="300"
                                alt="an image of something"
                            />
                        );
                    }}

                />

           
    )
}