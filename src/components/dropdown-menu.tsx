
import { Dropdown, MenuProps } from "antd";

interface Props {
  width?:string
  marginTop?:string
}

export default function DropdownMenu(props:Props){

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a>
              Make an Investment
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a>
              Conduct Internal Audit
            </a>
          ),
        },
        
    ];

    return(
        <Dropdown menu={{items}} trigger={['click']} >
            <button style={{width:props.width, marginTop:props.marginTop, textAlign:"center", fontSize:"1rem"}} className="dropdown">I want to...</button>
        </Dropdown>
    )
}