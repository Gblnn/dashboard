import { Badge, Select, Slider } from "antd";
import CircularProgress from "./circularprogress";
import Chart from "./chart";
import Stats from "./stats";
import TransactionSummary from "./transaction-summary";
import DropdownMenu from "./dropdown-menu";
import TodayStats from "./today-stats";
import Profile from "./profile";
import { BellOutlined } from "@ant-design/icons";


export default function MobileView(){
    return(
        <div className="mobile-view">
            <div className="" style={{zIndex:"10",backgroundColor:"white",position:"fixed", width:"100%", display:"flex", justifyContent:"flex-end"}}>
                <button style={{marginRight:"1.25rem", marginTop:"1.25rem", marginBottom:"1rem"}} className="nav-item">
                    <Badge color="#32BDEF" dot={true}>
                    <BellOutlined style={{fontSize:"1.25rem"}}/>
                    </Badge>
                </button>
            </div>
            <div className="mobile-container" style={{width:"90%", height:"fit-content"}}>

                <div style={{ width:"100%"}}>
                    <Profile profile="/profile.webp" title="Hi Mike," subtitle="welcome back"/>
                </div>
                    
                <div className="mobile-card">
                    <div style={{display:"flex", flexFlow:"column", width:"100%"}}>
                        <TodayStats amountfontsize="3rem" flexflow="row" separation="3rem"/>
                        <DropdownMenu marginTop="1rem" width="100%"/>
                    </div>
                </div>

                <div className="mobile-card">
                    <div style={{display:"flex", flexFlow:"column", width:"100%"}}>
                        <h3>Recent Transactions</h3>
                        <br/>
                        <div style={{display:"flex", flexFlow:"column", gap:"0.25rem"}}>
                            <TransactionSummary date="2020-08-07" summary="Withdrawal Transfer to Bank-XXX11"/>
                            <TransactionSummary date="2020-07-21" summary="Withdrawal Transfer to Bank-XXX11"/>
                            <TransactionSummary date="2020-07-21" summary="Withdrawal Transfer to Bank-XXX11"/>
                        </div>
                            
                    </div>
                            
                </div>

                <div className="mobile-card" style={{background:"none", padding:"0", width:"90%", justifyContent:""}}>
                    
                    <div style={{width:"100%"}}>
                        <br/>
                        <p style={{fontSize:"0.85rem"}}><strong>Retirement Income</strong></p>
                        <h3 style={{fontWeight:"800"}}>Starting Year 2056 </h3>
                        <br/><br/>
                        <Stats amount="$300,000" title="My Goal" width="19rem"/>
                        <br/>

                        <div style={{display:"flex", width:"21rem"}}>
                            <Stats amount="59%" title="Goal Achieved"/>
                            <Stats amount="$300" title="Est. Monthly Income"/>
                        </div>

                        <br/><br/><br/>
                        <h3>Contributions Overtime</h3>
                        <br/>
                               
                    </div>
                        
                        
                </div>

                <div style={{width:"90%", display:"flex", justifyContent:"center"}}>
                    <Chart width={500} height={270}/>
                </div>

                <div className="mobile-card" style={{padding:0, width:"95%", background:"none"}}>

                    <div style={{width:"100%"}} className="">
                        <h3>How do I compare to my peers?</h3>
                        <p style={{fontSize:"0.8rem"}}>These numbers represent current goal achievement</p>
                        <br/><br/>
                        <div style={{display:"flex",flexFlow:"column", gap:"1rem"}}>
                        <div style={{justifyContent:"space-between",paddingRight:"",paddingLeft:"1rem",display:"flex", alignItems:"center", gap:"2.5rem"}}>
                            <h4>Age: </h4>
                            <Select
                            defaultValue="Under 30"
                            style={{ width: 120 }}
                            bordered={false}
                            options={[
                                { value: 'under 25', label: 'Under 25' },
                                { value: 'under 30', label: 'Under 30' },
                                { value: 'under 35', label: 'Under 35' },
                            ]}
                            />
                                
                        </div>
                        

                        <div style={{ display:"flex",justifyContent:"space-between",paddingRight:"",paddingLeft:"1rem", alignItems:"center", gap:"1.5rem"}}>
                            <h4>Salary: </h4>
                            <Select
                            defaultValue="under 25"
                            style={{ width: 120 }}
                            bordered={false}
                            options={[
                                { value: 'under 25', label: '20k - 30k' },
                                { value: 'under 30', label: '30k - 40k' },
                                { value: 'under 35', label: '50k - 60k' },
                            ]}
                            />
                        
                        </div>

                        <div style={{ display:"flex",justifyContent:"space-between",paddingRight:"",paddingLeft:"1rem", alignItems:"center", gap:"1.2rem"}}>
                            <h4>Gender: </h4>
                            <Select
                            defaultValue="male"
                            style={{ width: 120 }}
                            bordered={false}
                            options={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' }
                            ]}
                            />
                                    
                        </div>
                        </div>
                        

                        <div style={{justifyContent:"center",width:"100%", display:"flex", gap:"2rem", marginBottom:"2rem", marginTop:"3.5rem", marginRight:"1rem"}}>
                            <CircularProgress percentage={78} title="Average"/>
                            <CircularProgress percentage={95} title="Top"/>
                            <CircularProgress percentage={59} title="Me"/>
                        </div>    
                    </div>
                    
                </div>
                <br/>

                <div className="mobile-card" style={{padding:0, flexFlow:"column", width:"95%"}}>
                    <div style={{width:"85%", padding:"1.5rem"}}>
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
                        <button style={{fontSize:"1rem",marginTop:"1.5rem", borderTopRightRadius:0,borderTopLeftRadius:0, borderBottomLeftRadius:"1rem", borderBottomRightRadius:"1rem"}} className="button">Update</button>
                    
                    </div>
                    
                    <div style={{height:"10rem"}}></div>
                
            </div>
        </div>
    )
}