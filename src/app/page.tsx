"use client";
import { Button } from '@/components/ui/button';
import { AnyMxRecord } from 'dns';
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import router from 'next/router';
import { useState } from 'react';



export type UploadResult = {
  info: {
    public_id: string
  },
  event: 'success'
}

export default function Home() {
  const [imageId, setimageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button asChild >
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
            onUpload={(result: UploadResult | any ) => {
              //   setimageId(result.info.public_id)
              // setTimeout(() => {
              //   console.log("refresh");
              //   router.reload();
              // }, 1000)
            }}

            uploadPreset="qgwynlxk" />
        </div>
      </Button>
      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"

          alt="Description of my image"
        />
      )}
    </main>
  )
}
