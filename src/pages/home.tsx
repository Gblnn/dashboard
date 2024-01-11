import { Select } from "antd";
import 'react-circular-progressbar/dist/styles.css';
import Chart from "../components/chart";
import CircularProgress from "../components/circularprogress";
import DropdownMenu from "../components/dropdown-menu";
import Profile from "../components/profile";
import Retirement from "../components/retirement";
import RetirementStrategy from "../components/retirement-strategy";
import Stats from "../components/stats";
import TodayStats from "../components/today-stats";
import TransactionSummary from "../components/transaction-summary";
import MobileView from "../components/mobile-view";

export default function Home() {

    return(
        <>

        <MobileView/>
        
        <div className="main">

            <div className="side">

                <div style={{marginTop:"2.5rem", marginLeft:"1.5rem", paddingRight:'2rem'}}>

                    <Profile profile="/profile.webp" title="Hi Mike," subtitle="welcome back"/>

                    <div style={{height:"72vh",display:'flex', flexFlow:"column", gap:"1rem",  marginLeft:"0.5rem", overflowY:"auto", paddingLeft:"1rem",marginTop:"1.5rem", paddingRight:"1.5rem"}}>  
            
                    <TodayStats flexflow="column" separation="1rem"/>
                    <DropdownMenu/>
                    
                    <div style={{height:"1rem"}}></div>
                        <div>
                            <h4 style={{fontWeight:"800", marginBottom:"1rem"}}>Recent Transactions</h4>
                            <div style={{display:"flex", flexFlow:"column", gap:"0.5rem", height:""}}>
                                <TransactionSummary date="2020-08-07" summary="Withdrawal Transfer to Bank-XXX11"/>
                                <TransactionSummary date="2020-07-21" summary="Withdrawal Transfer to Bank-XXX11"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="middle">

                <div style={{ margin:"", paddingLeft:"1rem",paddingRight:"1rem", height:"90%", overflowY:"auto", overflowX:"hidden"}}>

                    <p style={{fontSize:"0.85rem"}}><strong>Retirement Income</strong></p>
                    <h3 style={{fontWeight:"800"}}>Starting Year 2056 </h3>

                    <div style={{height:"2rem"}}></div>

                    <div style={{display:"flex", gap:"2rem"}}>
                        <Stats amount="$300,000" title="My Goal"/>
                        <Stats amount="59%" title="Goal Achieved"/>
                        <Stats amount="$300" title="Est. Monthly Income"/>
                    </div>

                    <div>
                        <div style={{height:"3rem"}}></div>
                        <h3>Contributions Overtime</h3>
                        <div style={{height:"1rem"}}></div>
                        <Chart width={575} height={250}/>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"3rem"}}>
                        <div>
                            <div>
                            <h3>How do I compare to my peers?</h3>
                            <p style={{fontSize:"0.8rem"}}>These numbers represent current goal achievement</p>
                            </div>
                            
                            <div style={{marginTop:"1.75rem"}}>
                                <div style={{display:"flex", alignItems:"center", gap:"2.5rem"}}>
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

                                <div style={{ display:"flex", alignItems:"center", gap:"1.5rem"}}>
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

                                <div style={{ display:"flex", alignItems:"center", gap:"1.2rem"}}>
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
                            
                            
                        </div>
                        <div style={{display:"flex", gap:"2.5rem", marginBottom:"2rem", marginTop:"3.5rem", marginRight:"1rem"}}>
                            <CircularProgress percentage={78} title="Average"/>
                            <CircularProgress percentage={95} title="Top"/>
                            <CircularProgress percentage={59} title="Me"/>
                        </div>
                        
                    </div>
                    <Retirement/>
                </div>
                    
            </div>

            <div className="retirement-strategy">
            <RetirementStrategy/>
            </div>
            
        </div>
        
        </>
    )
}