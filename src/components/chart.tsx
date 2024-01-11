import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface Props{
    width:number
    height: number 
}

export default function Chart(props:Props) {
        const data = [
            { name: '20', Employer: 10, Employee: 15, Interest: 20 },
            { name: '25', Employer: 10, Employee: 25, Interest: 25 },
            { name: '30', Employer: 15, Employee: 35, Interest: 30 },
            { name: '35', Employer: 20, Employee: 45, Interest: 35 },
            { name: '40', Employer: 25, Employee: 55, Interest: 40 },
            { name: '45', Employer: 30, Employee: 60, Interest: 45 },
            { name: '50', Employer: 35, Employee: 75, Interest: 50 },
            { name: '55', Employer: 40, Employee: 85, Interest: 55 },
            { name: '60', Employer: 45, Employee: 95, Interest: 60 },
            { name: '20', Employer: 50, Employee: 105, Interest: 65 },
            { name: '25', Employer: 55, Employee: 115, Interest: 70 },
            { name: '30', Employer: 60, Employee: 125, Interest: 75 },
            { name: '35', Employer: 65, Employee: 135, Interest: 100 },
            
        ];
    
    return(
        <>
        <BarChart className="barchart" width={props.width} height={props.height} data={data} >
        {/* <Legend iconType="circle" wrapperStyle={{paddingBottom:"1rem"}} layout="horizontal" verticalAlign="top" align="center" /> */}
        <CartesianGrid strokeDasharray="3"/>
            <XAxis dataKey="name" axisLine={false} tick={false}/>
            <YAxis axisLine={false} points="false" tickCount={4}/>
            <Bar dataKey="Employer" barSize={15} stackId="a" fill="#0800a3" />
            <Bar dataKey="Employee" barSize={15} stackId="a" fill="#4935ff" />
            <Bar dataKey="Interest" barSize={15} stackId="a" fill="#85afff" />
        </BarChart>
        </>
    )
}