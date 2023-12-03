import cloudinary from 'cloudinary'
import GalleryGrid from "./gallery-grid"
import UplaodButton from "@/components/ui/icons/uplaod-button"

export type SearchResult = {
    public_id: string;
    tags: string[]

}

export default async function HomePage(
    { searchParams: { search },
    }: {
        searchParams:
        {
            search: string
        }
    }) {
    const result = (await cloudinary.v2.search
        .expression(`resource_type:image ${search ? ` AND tags=${search} ` : ""}`)
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(50)
        .execute()) as { resources: SearchResult[] };

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Home</h1>
                    <UplaodButton /></div>

                <GalleryGrid
                    images={result.resources}
                />
                <div className='my-2'>
                    <p className='font-style: italic'>
                        "In this gallery, each frame is a universe, a silent masterpiece speaking volumes in visual whispers. Each stroke of color and shadow tells a story, inviting you to interpret the artistry, lose yourself in the emotion, and find beauty in the spaces between. Welcome to a sanctuary where every glance is an exploration, and every piece is a portal into the boundless realms of creativity."</p>
                    <p className='font-bold text-end '>
                        Design by : SYED RAZA ALI
                    </p>
                </div>
            </div>
        </section>
    )
}