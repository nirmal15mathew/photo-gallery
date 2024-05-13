
import { FrameParent } from "./FrameParent";
import app from "@/app/firebase"
import { getStorage, ref, listAll } from "firebase/storage";
import { useDebugValue } from "react";

async function getImagesList() {
    "use server"
    const storage = getStorage(app)
    const listRef = ref(storage, 'images')

    let urlList = (await listAll(listRef)).items;
    return urlList
}


export async function GallerySection() {
    const imgRefList = await getImagesList() || []
    

    const imgList = imgRefList.map((src, i) =>(<FrameParent imgRef={src} key={i}></FrameParent>))
    return <section className="px-4">
        <div className="px-2 flex justify-start flex-wrap gap-4 items-start content-start">
            {imgList}
        </div>
    </section>
}