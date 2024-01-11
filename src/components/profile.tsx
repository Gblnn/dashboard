

interface Props{
    profile:string
    title:string
    subtitle:string
}

export default function Profile(props:Props) {
    return(
        <>
        <div style={{display:"flex",height:"fit-content", alignItems:"center", gap:"1rem", marginLeft:"1rem"}}>
            <img src={props.profile} style={{objectFit:"cover",boxShadow:"1px 1px 20px rgba(0 0 0/ 40%)",background:"#4935ff", width:"4.5rem", height:"4.5rem", borderRadius:"50%"}}/>
            <div style={{display:"flex", flexFlow:"column"}}>
                <h2 style={{fontWeight:"800"}}>{props.title}</h2>
                <p style={{marginLeft:"0.2rem"}}>{props.subtitle}</p>
            </div>
        </div>
        </>
    )
}