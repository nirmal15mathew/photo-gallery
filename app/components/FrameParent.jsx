import { deleteObject, getDownloadURL, getStorage, ref } from "firebase/storage";
import PhotoFrame from "./PhotoFrame";
import app from "../firebase";

export async function FrameParent({ imgPath }) {

    const storage = getStorage(app)
    const imgRef = ref(storage, imgPath)
    const imgUrl = await getDownloadURL(imgRef) || "";

    async function deleteImage({imgRef, formData}) {
        "use server"

        return await deleteObject(imgRef)
    }
    const deleteImageWithRef = deleteImage.bind(null, imgRef)
    // if (imgPath != '') {
    // }



    
    return <div>
        <PhotoFrame src={imgUrl} />
        <form action={deleteImage}>
            <button type="submit">Delete</button>
        </form>
    </div>
}