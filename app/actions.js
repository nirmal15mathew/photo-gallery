"use server"
import { deleteObject, getStorage } from "firebase/storage";

export async function deleteImage(imgRef) {
    await deleteObject(imgRef)
}