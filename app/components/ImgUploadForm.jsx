import { getStorage, ref, uploadBytes } from "firebase/storage"
import app from "../firebase"


async function uploadImage(formData) {
    "use server"
    const storage = getStorage(app);
    const uploadedFile = formData.get('img-file')
    if ('name' in uploadedFile) {
        const fileName = uploadedFile.name
        const fileReference = ref(storage, `images/${fileName}`)

        const res = await uploadBytes(fileReference, uploadedFile)
    }
}

export default function ImgUploadForm() {
    return (
        <form action={uploadImage}>
            <input type="text" name="img-label" placeholder="image title" />
            <input type="file" name="img-file" id=""/>
            <button type="submit">Upload</button>
        </form>
    )
}