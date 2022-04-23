import { useEffect } from "react"

export function useInPath(state) {
    useEffect(() => {
        console.log(window.location.pathname)
        state(window.location.pathname)
    }, [])
}