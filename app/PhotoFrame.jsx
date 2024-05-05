
import Image from "next/image";
export default function PhotoFrame({
    src,
    title,
    location
}) {
    return (
        <figure className="rounded-lg overflow-hidden">
            <Image src={src}
                width={300}
                height={400}
                placeholder="data:image/iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMjg1dCgADvAGsCQA/LAAAAABJRU5ErkJggg=="
                priority={false}
                alt="picture" />
        </figure>
    )
}