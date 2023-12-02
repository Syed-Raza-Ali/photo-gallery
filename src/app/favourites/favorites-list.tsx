"use client"
import cloudinary from 'cloudinary'
import { CloudinaryImage } from "../../components/ui/cloudinary-image"
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from '@/components/ui/force-refresh';
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
                        alt="an image of something"
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