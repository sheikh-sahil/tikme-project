
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Location.css"
import { faBagShopping, faChevronRight, faClock, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Location()
{
    return<div id="locationbox">
        
     <div id="address">
        <div id="cmpicon">
            <img src="https://mallmaverick.imgix.net/web/property_managers/16/properties/277/stores/bramaleacitycentre-bramalea-city-centre-rajdhani-express/logo_aHR0cHM6Ly9tYWxsbWF2ZXJpY2suaW1naXgubmV0L3Byb3BlcnR5X21hbmFnZXJzLzE2L3Byb3BlcnRpZXMvMjc3L3N0b3Jlcy81MDM3MA=="/>

        </div>
        <div id="add">
            <span class="hed">City South Pizza, Hurontario St & Ray </span>
            <span class="hed">Lawson Blvd, Brampton</span>

            <button>Store is Open</button>
            <div id="add2">
            <div style={{width:"5%" }}><FontAwesomeIcon icon={faLocationDot}/></div>

            <span>7700 Hurontario St & Ray Lawson Blvd, Brampton, ON L6Y 4M3, Canada</span>
            </div>

            <div id="add2">
            <div style={{width:"5%" }}><FontAwesomeIcon icon={faPhone}/></div>
            
            <span>+1 (905) 789-9901</span>
            </div>


            <div id="add2">
            <div style={{width:"5%" }}><FontAwesomeIcon icon={faClock}/></div>
            
            <span>Store Hrs: 10:00AM to 11:00PM</span>
            </div>

        </div>  
    </div>

    <div id="pickup">
        <div id="txt">
        
             <div><FontAwesomeIcon icon={faBagShopping}/></div>
             <span>Pickup</span>
             <FontAwesomeIcon icon={faChevronRight}/>
        </div>

        <div id="txt2">
            <span>7700 Hornotario St & Ray Lawson Blvd, Brampton, Canada</span>
            <span>2023-10-27, 12:30PM - 01:30PM</span>

           
           
        
        </div>
         

        
        

        
     
    </div>
    
        

    </div>


}
export default Location;