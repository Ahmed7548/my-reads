import { useState,useEffect } from "react"
const useManageDpDownList = () => {
    const [dpDownACtive,setDpDownACtive]=useState(false)

    const activateDpDown = () => {
        setDpDownACtive(true)
    }

    const effect = useEffect((ref) => {
        const clickOutSideDEtector = (event) => {
            if (dpDownACtive && ref.current && ref.current.contains(event.target)) {
                setDpDownACtive(false)
            }
        }
        document.addEventListener("click", clickOutSideDEtector)
        
        return () => {
            document.removeEventListener("click",clickOutSideDEtector)
        }
    },[dpDownACtive])

    return[dpDownACtive,activateDpDown,effect]
}


export default useManageDpDownList