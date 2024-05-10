import { useState } from "react";
import { getStorage, ref, listAll } from "firebase/storage";

// export function useFirebaseImage(path) {
//     const [imgUrl, setImgUrl] = useState("");


//     const storage = getStorage();

//     // Create a reference under which you want to list
//     const listRef = ref(storage, 'images');

//     // Find all the prefixes and items.
//     listAll(listRef)
//         .then((res) => {
//             res.prefixes.forEach((folderRef) => {
//                 // All the prefixes under listRef.
//                 // You may call listAll() recursively on them.
//             });
//             res.items.forEach((itemRef) => {
                
//             });
//         }).catch((error) => {
//             // Uh-oh, an error occurred!
//         });



//     return imgUrl;
// }