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
import { useState } from "react"

export function ImageMenu({image} : {image: SearchResult}) {
    const [open, setOpen] = useState(false)
    return (
<div className="absolute top-2 left-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="w-8 h-8 p-0">
                    <AddtoAlbum />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                    <AddtoAlbumDialog
                    image = {image}  onClose={() => setOpen(false)}
                    /> 
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
</div>
    )
}
