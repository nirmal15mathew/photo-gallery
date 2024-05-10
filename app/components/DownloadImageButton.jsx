"use client"
export function DownloadImageButton({downloadHandler, children}) {
    return <button onClick={() => downloadHandler()}>
        {children}
    </button>
}