

import "./Menu.css"


function Menu(props)
{

    

    return<div id="list">
        <div id="menu">
            <span>{props.no}</span>
            <span>{props.text}</span>
        </div>
        <span class="amount">{props.amount}</span>

        
    </div>  
}
export default Menu;