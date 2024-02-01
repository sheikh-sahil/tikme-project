
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css"
import companylogo from "./raw/logo.png"
import { faUser } from "@fortawesome/free-solid-svg-icons"
function Header()
{
    return<div id="topbar">
        <img src={companylogo} />
        <span className="user"> <FontAwesomeIcon icon={faUser}/>   <span>Johnson William</span>  </span>
    </div>
}
export default Header