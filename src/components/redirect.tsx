import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Redirect() {
    const usenavigate = useNavigate()
    useEffect(()=>{
        usenavigate('/layout/home')

        // if(window.name==""){
        // }

    },[usenavigate])
    return(
        <>
        </>
    )
}