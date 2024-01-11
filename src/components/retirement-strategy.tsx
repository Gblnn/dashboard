import { Slider } from "antd";
import Banner from "./banner";


export default function RetirementStrategy() {
    return(
        <div>
                <div style={{width:"30ch", height:"40ch", background:"rgba(0 0 0 / 3%)", margin:"3rem", borderRadius:"1rem"}}>

                    <div style={{  height:"100%", padding:"1.25rem", overflowY:"auto"}}>
                        <h3>Retirement Strategy</h3>
                        <div style={{marginTop:"1.5rem"}}>

                            <p style={{fontSize:"0.8rem", fontWeight:"800"}}>Employee Contribution</p>
                            <Slider defaultValue={12}/>

                            <p style={{fontSize:"0.8rem", fontWeight:"800"}}>Retirement Age</p>
                            <Slider defaultValue={65}/>
    
                        </div>
                        <hr style={{marginTop:"1.5rem", marginBottom:"1.5rem"}}/>

                        <div style={{display:"flex", flexFlow:"column", gap:"0.75rem"}}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>Employer Contribution</p>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>8.4%</p>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>Interest Rate</p>
                                <p style={{fontSize:"0.85rem", fontWeight:"800"}}>5%</p>
                            </div>
                        </div>
                        <div style={{display:"flex", flexFlow:"column"}}>
                        <button style={{marginTop:"1.5rem"}} className="button">Update</button>
                        <a className="a" style={{marginTop:"1rem"}}>View Help Docs </a>
                        </div>
                        
                          
                    </div>
                    <Banner/>
                    
                </div>

            </div>
    )
}