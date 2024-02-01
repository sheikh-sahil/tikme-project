import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pay.css"
import { faG, faIdCard } from "@fortawesome/free-solid-svg-icons";


function Pay(props)
{
 

    return<div id="paybox" style={{display:props.isVisible?'flex':'none'}}  >
        <div id="pay" onBlur={()=>{props.showPaymentOptionScreen(false)}}>
            <div class="section1">
                <span>Payment Method</span>
                <span>Credit/Debit Card</span>
                <button id="paybtn">  <img style={{width:'20px',height:'20px'}} src='https://clipartcraft.com/images/google-logo-transparent-alphabet-4.png'/>   Pay</button>

                <div id="cardinput">
                    <FontAwesomeIcon icon={faIdCard}/>
                    <input type="text" placeholder="Card Number"/>
                    <span>MM / YY CVC ZIP </span>
                </div>
            </div>

            <span class="labels">Powered by Stripe.</span>
            <span class="labels">Your information is encrypted and can’t b read by TikMe</span>


            <button class="cmfpay">Confirm and Pay</button>






        </div>

    </div>
}
export default Pay;