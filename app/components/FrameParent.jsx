import { deleteObject, getDownloadURL, getStorage, ref} from "firebase/storage";
import PhotoFrame from "./PhotoFrame";
import app from "../firebase";

export async function FrameParent({ imgRef }) {

    const imgUrl = await getDownloadURL(imgRef) || "";
    
    async function deleteImage(formData) {
        "use server"
        const storage = getStorage(app)
        const imRef = ref(storage, imgRef.fullPath)
        deleteObject(imRef).then((rs) => console.log(rs)).catch((er) => console.log(er))
    }

    
    return <div>
        <PhotoFrame src={imgUrl} />
        <form action={deleteImage} className={true ? "hidden": ""}>
            <button type="submit">Delete</button>
        </form>
    </div>
}