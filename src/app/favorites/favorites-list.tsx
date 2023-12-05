"use client"
import cloudinary from 'cloudinary'
import { CloudinaryImage } from "../../components/ui/cloudinary-image"
import { SearchResult } from "../page";
import { useEffect, useState } from 'react';
import { ImageGrid } from '@/components/ui/image-grid';



export default function FavoritesList({
    initialResources,
}:
    {
        initialResources: SearchResult[]
    }) {

    const [resources, setResouces] = useState(initialResources);

    useEffect(() => {
        setResouces(initialResources)
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="Loading Image"
                        onUnhearted={(unheartedResource) => {
                            setResouces((currentResources) =>
                                currentResources.filter(
                                    (resource) => resource.public_id !== unheartedResource.public_id
                                )
                            )
                        }}
                    />
                )
            }}

        />

    );
}  