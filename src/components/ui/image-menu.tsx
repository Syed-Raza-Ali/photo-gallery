import { FolderPlus, Pencil, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddtoAlbum } from "./icons/add-to-album"
import { AddtoAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/page"
import { useState } from "react"
import Link from "next/link"

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
            <DropdownMenuContent className="w-40 bg-black text-white rounded-xl">
                <DropdownMenuItem asChild >
                    <AddtoAlbumDialog
                    image = {image}  onClose={() => setOpen(false)}/> 
                </DropdownMenuItem> 
                <DropdownMenuItem asChild>
                    <Link href = {`/edit?publicId=${encodeURIComponent(image.public_id)}`} className="cursor-pointer"><Pencil className="mr-2 w-4 h-4 cursor-pointer"/> Edit</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
</div>
    )
}
