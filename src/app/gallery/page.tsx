import { CldImage } from "next-cloudinary"
import UplaodButton from "./uplaod-button"
import cloudinary from 'cloudinary'
import { CloudinaryImage } from "../../components/ui/cloudinary-image"
import { ImageGrid } from "@/components/ui/image-grid"
import GalleryGrid from "./gallery-grid"

export type SearchResult = {
    public_id: string;
    tags: string[]

}

export default async function GalleryPage() {
    const result = (await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };

    const MAX_COLUMNS = 4
    function getColumns(colIndex: number) {
        return result.resources.filter((resource, idx) => idx % MAX_COLUMNS == colIndex
        )
    }
    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <UplaodButton /></div>
                <GalleryGrid
                    images={result.resources}
                />

            </div>
        </section>
    )
}