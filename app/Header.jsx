import {Pacifico} from "next/font/google"

const pfc = Pacifico({
  weight: "400",
  subsets: ["latin"]
})

export default function Header({ children }) {
    return (
        <header className="flex width-100% justify-center py-4 my-8">
            <h1 className={"text-4xl font-semibold text-slate-700 " + pfc.className}>{children}</h1>
        </header>
    )
}