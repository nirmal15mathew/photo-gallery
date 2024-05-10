import { deleteObject, getStorage } from "firebase/storage";

export async function deleteImage(imgRef) {
    deleteObject(imgRef).then((res) => {
        return true
    })
    .catch((reg) => {
        return false
    })
}