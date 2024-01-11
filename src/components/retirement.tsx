import { Slider } from "antd";


export default function Retirement(){
    return(
        <>
        <div className="tablet-only mobile-card" style={{height:"auto",padding:0,paddingBottom:0, flexFlow:"column", width:"95%", marginTop:"2.5rem",marginBottom:"2.5rem"}}>
            
                        <div style={{width:"100%", padding:"1.5rem"}}>
                            <h3>Retirement Strategy</h3>
                            <div style={{marginTop:"1.5rem", width:"85%"}}>

                                <p style={{fontSize:"0.8rem", fontWeight:"800"}}>Employee Contribution</p>
                                <Slider defaultValue={12}/>

                                <p style={{fontSize:"0.8rem", fontWeight:"800"}}>Retirement Age</p>
                                <Slider defaultValue={65}/>
        
                            </div>
                            <hr style={{marginTop:"1.5rem", marginBottom:"1.5rem", width:"85%"}}/>

                        <div style={{ display:"flex", flexFlow:"column", gap:"0.75rem", width:"85%"}}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>Employer Contribution</p>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>8.4%</p>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>Interest Rate</p>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>5%</p>
                            </div>
                        </div>
                        
                        </div>
                        <button style={{marginTop:"1.5rem", borderTopRightRadius:0,borderTopLeftRadius:0, borderBottomLeftRadius:"1rem", borderBottomRightRadius:"1rem"}} className="button">Update</button>
                        
                    </div>
        </>
        
                    
    )
}