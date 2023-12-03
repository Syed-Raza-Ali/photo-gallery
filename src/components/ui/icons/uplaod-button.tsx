'use client'

import { CldUploadButton } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export type UploadResult = {
    info: {
      public_id: string
    },
    event: 'success'
  }

export default function UplaodButton() {
    const router = useRouter();
    return (
        <Button asChild >
            <div className="flex gap-1 border text-black rounded-xl">
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
                        setTimeout(() => {
                            console.log("refresh");
                            router.refresh();
                        }, 1000)

                    }}

                    uploadPreset="qgwynlxk" />
            </div>
        </Button>
    )
}