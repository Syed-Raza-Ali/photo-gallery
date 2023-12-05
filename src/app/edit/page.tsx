"use client"
import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage(
    { searchParams: { publicId },
    }: {
        searchParams:
        {
            publicId: string
        }
    }) {

    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "grayscale" | "pixelate" | "bg-remove" | "opacity"
    >();

    return <section>
        <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Edit Image  </h1>
            </div>

            <div className="flex gap-5">

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation(undefined)}>
                    Remove Changes
                </Button>

                <Button
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("generative-fill")}>
                    Apply Generative Fill
                </Button>

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("blur")}>
                    Blur Image
                </Button>

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("grayscale")}>
                    Convert Into Gray
                </Button>

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("pixelate")}>
                    Pixelate
                </Button>

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("bg-remove")}>
                    background removal
                </Button>

                <Button
                    variant="ghost"
                    className="border bg-black text-white rounded-xl"
                    onClick={() => setTransformation("opacity")}>
                    Low opacity
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-12">

                <CldImage src={publicId} width="300" height="200" alt="In process..." />

                {transformation === 'generative-fill' && (
                    <CldImage
                        src={publicId}
                        width="1800"
                        height="1200"
                        alt="In process..."
                        crop="fill"
                        fillBackground
                    />

                )}

                {transformation === 'blur' && (
                    <CldImage
                        src={publicId}
                        width="1200"
                        height="1400"
                        blur= "800"
                        alt="In process..."

                    />

                )}




                {transformation === 'grayscale' && (
                    <CldImage
                        src={publicId}
                        width="1200"
                        height="1400"
                        grayscale
                        alt="In process..."

                    />

                )}

                {transformation === 'pixelate' && (
                    <CldImage
                        src={publicId}
                        width="1200"
                        height="1400"
                        pixelate
                        alt="In process..."

                    />

                )}

                {transformation === 'bg-remove' && (
                    <CldImage
                        src={publicId}
                        width="1200"
                        height="1400"
                        removeBackground
                        alt="In process..."

                    />


                )}
                {transformation === 'opacity' && (
                    <CldImage
                        src={publicId}
                        width="1200"
                        height="1400"
                        opacity= { 50  }
                        alt="In process..."

                    />


                )}


            </div>
        </div>
    </section>
}