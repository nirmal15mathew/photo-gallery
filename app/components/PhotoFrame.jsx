"use client"
import Image from "next/image";
import {useState} from "react"

export default function PhotoFrame({
    src,
    title,
    location,
}) {
    const [titleVis, setTitleVisibility] = useState(false);

    return (
        <figure className="rounded-lg overflow-hidden flex-grow" onMouseEnter={() => setTitleVisibility(true)} onMouseLeave={() => setTitleVisibility(false)}>
            <Image src={src}
                width={400}
                height={300}
                placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMjg1dCgADvAGsCQA/LAAAAABJRU5ErkJggg=="
                priority={false}
                alt="picture" />
            <span className={titleVis ? "opacity-100 absolute" : "opacity-0 absolute"}>{title}</span>
        </figure>
    )
}