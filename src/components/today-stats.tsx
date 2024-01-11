
interface Props {
    amountfontsize?:string
    flexflow:string
    separation?:string
}

export default function TodayStats(props:Props) {
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap", flexFlow:"column", gap:"0.75rem"}}>
        <h3>Today</h3>
        <div>
            <h2 style={{fontWeight:"800", fontSize:props.amountfontsize}}>$19,892</h2>
            <p style={{fontSize:"0.9rem"}}>Account Balance</p>
        </div>

        <div></div>
        
        <div style={{display:"flex", gap:props.separation, flexFlow:props.flexflow}}>
            <div>
                <h3 style={{fontWeight:"800"}}>$4,000</h3>
                <p style={{fontSize:"0.9rem"}}>Year-to-Date</p>
            </div>

            <div>
                <h3 style={{fontWeight:"800"}}>$1,892</h3>
                <p style={{fontSize:"0.9rem"}}>Total Interest</p>
            </div>
        </div>
        
        <div style={{height:"0.25rem"}}></div>
        </div>
        
        </>
    )
}