
import cloudinary from 'cloudinary'
import { CloudinaryImage } from "../gallery/cloudinary-image"
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from '@/components/ui/force-refresh';
import FavoritesList from './favorites-list';



export default async function FavoritesPage() {
    const result = (await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };
        

    return (
        <section>
            <ForceRefresh/>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favourites Images</h1>
                    </div>
                    <FavoritesList
                    initialResources={result.resources}
                    />
                {/* <div className="grid grid-cols-4 gap-4">
                    {result.resources.map(result =>
                        <CloudinaryImage
                            key={result.public_id}
                            imageData={result}
                            width="400"
                            height="300"
                            alt="an image of something"
                            
                        />
                    )}
                </div> */}
            </div>
        </section>
    )
}