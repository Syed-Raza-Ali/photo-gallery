'use client'

import { CldUploadButton } from "next-cloudinary"
import { UploadResult } from "../page"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"


export default function Gallery() {
    return (
        <section>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <Button variant="outline" >
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                        </svg>


                        <CldUploadButton
                            onUpload={(result: UploadResult | any) => {
                                //   setimageId(result.info.public_id)
                            }}

                            uploadPreset="qgwynlxk" />
                    </div>
                </Button>
            </div>
        </section>
    )
}