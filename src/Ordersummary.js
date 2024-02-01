import "./Ordersummary.css"
import Menu from "./Menu.js"
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen }from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react";
import Pay from "./Pay";


function Ordersummery(props)
{
   const [open,popup]=useState(false);
   const r1=useRef();

    return<div id="ParentBox">
        <div id="Box">
         <div class="Header">                        
            <div id="Heading">
                <p>Order Summary</p>
                <FontAwesomeIcon icon={faPen}/>
            </div>
        </div>

         <div id="container" onClick={()=>popup(!open)}>

         <Menu no="1." text="Single 4 Topping Pizza-Meduim Pizza &#8227;" amount="$ 19.49"/>
         <Menu no="2." text="Single 4 Topping Pizza-Large Pizza &#8227;" amount="$ 45.50"/>

         <div id="pop" style={{display:(open)?"block":"none"}}>
                <Dropdown Text1="Whole" Text2="Choice of Crust" Text3="Regular Crut"/>
                <Dropdown Text1="Select Base Sauce for Medium Pizza" Text2="Butter Chicken (1)($2.25)"/>
                <Dropdown Text1="Free Toppings-Condiments" Text2="Whole" Text3="Coriander (x1)" Text4="Fresh Garlic (x1)"/>
                <Dropdown Text1="Choice of Toppings for Medium Pizza" Text2="Additional Topping Price : $3.25" Text3="Whole" Text4="Pepperoni (x1)"/>
                <Dropdown Text1="Add-on" Text2="Extra Dipping Sauce (1) ($1.00)"/>
            </div>

         </div>

         <div id="container2">
         <Menu  text="Item Total" amount="$ 64.99"/>
         <Menu  text="Coupon ($20_OFF)" amount="-$ 20.00"/>
         </div>

         <div id="container3">
         <Menu  text="Sub-Total" amount="$ 23.31"/>
         </div>


         <div id="container4">
         <Menu  text="Delivery Free" amount="$ 4.66"/>
         <Menu  text="Service Free" amount="$ 4.66"/>
         <Menu  text="Taxes" amount="$ 6.24"/>
         <Menu  text="Tip Amount" amount="$ 1"/>
         </div>

         <div id="paymentbar">
            <div id="title">Payment Method</div>

            <div id="check">
               <span class="act" ref={r1}><input type="radio" onClick={()=>{r1.current.style.color="green";}}/>Pay Now</span> 
               <span><input type="radio"/>Pay at Store</span> 
            </div>

            <div id="msg">The Service fee may vary on the payment method chosen</div>
            <select>
            <option>5%</option>
            <option>4%</option>
            <option>3%</option>
            <option>2%</option>
            <option>1%</option>
          </select>

         </div>

             <Menu text="Total" amount="$ 109.89"></Menu>

             <button onClick={()=>{ props.showPaymentOptionScreen(true);  }}>Submit</button>

        </div>

     </div>


}
export default Ordersummery;