
import "./Dropdown.css"

function Dropdown(props)
{
    return<div id="drop">
        <div class="Text">
            <span>{props.Text1}</span>
            <span>{props.Text2}</span>
            <span>{props.Text3}</span>
            <span>{props.Text4}</span>
            
        </div>

    </div>
}
export default Dropdown;