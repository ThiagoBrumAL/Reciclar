import type { ReactNode } from "react"

interface MainProps{
    children: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <main
            className="
                flex-1 flex flex-col justify-center items-center
                font-inter
            "
        >
            { children }
        </main>
    )
}