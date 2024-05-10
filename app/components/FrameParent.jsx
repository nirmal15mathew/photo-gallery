import { deleteObject, getDownloadURL } from "firebase/storage";
import PhotoFrame from "./PhotoFrame";

export async function FrameParent({ imgRef }) {
    const imgUrl = await getDownloadURL(imgRef);
    async function deleteImage() {
        "use server"

        await deleteObject(imgRef)
    }

    return <div>
        <PhotoFrame src={imgUrl}/>
        
    </div>
}