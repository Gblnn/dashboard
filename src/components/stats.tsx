

interface Props {
    amount:string
    title:string
    width?:string
}

export default function Stats (props:Props) {
    return(
        <div style={{paddingRight:"3rem", width:"8rem", display:"flex", flexFlow:"column", gap:"0.25rem"}}>
            <h2 style={{fontWeight:"800", width:"fit-content"}}>{props.amount}</h2>
            <p style={{width:"fit-content", fontSize:"0.8rem"}}>{props.title}</p>
            <div style={{border:"1px solid #4935ff", width:props.width, marginTop:"0.5rem"}}></div>
        </div>
    )
}