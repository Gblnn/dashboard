

interface Props {
    date:string
    summary:string
}

export default function TransactionSummary(props:Props) {
    return(
        <>
            <div style={{display:"flex", flexFlow:"column", gap:"0.25rem", }}>
                <p style={{fontSize:"0.85rem", width:"fit-content"}}>{props.date}</p>
                <h5 style={{fontWeight:"800", width:"fit-content"}}>{props.summary}</h5>
            </div>
            <hr/>
        </>
    )
}