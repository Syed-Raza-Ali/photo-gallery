import { FolderPlus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddtoAlbum } from "./icons/add-to-album"
import { AddtoAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"

export function ImageMenu({image} : {image: SearchResult}) {
    return (
<div className="absolute top-2 left-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-8 h-8 p-0">
                    <AddtoAlbum />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                    {/* <FolderPlus className="mr-2 h-4 w-4 "/>
                    <span>Add to Album</span> */}
                    <AddtoAlbumDialog
                    image = {image}
                    /> 
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
</div>
    )
}
