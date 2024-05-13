"use client"
import Image from "next/image";

export default function PhotoFrame({
    src,
    title,
    location,
}) {

    return (
        <figure className="rounded-lg overflow-hidden flex-grow hover:shadow-lg transition-shadow">
            <Image src={src}
                width={400}
                height={300}
                placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMjg1dCgADvAGsCQA/LAAAAABJRU5ErkJggg=="
                priority={false}
                alt="picture" />
        </figure>
    )
}