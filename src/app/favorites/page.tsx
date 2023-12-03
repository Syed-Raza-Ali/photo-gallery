import cloudinary from 'cloudinary'
import { SearchResult } from "../page";
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
                    <h1 className="text-4xl font-bold">All your favorites is here</h1>
                    </div>
                    <FavoritesList
                    initialResources={result.resources}
                    />
 
            </div>
        </section>
    )
}