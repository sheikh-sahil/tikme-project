







import { useState } from "react";
import Location from "./Location.js";
import Ordersummery from "./Ordersummary.js";
import Header from "./Header.js"
import "./App.css"
import Pay from "./Pay.js"
import Footer from "./Footer.js";
import Cal from "./cal.js"

function App() 
{
    const [paymentOptScr,setPaymentOptScr]=useState(false);
    
    return<div id="parentscreen">
         <Header/>
         <div id="screenbox">
        <Location/>
        <Ordersummery showPaymentOptionScreen={setPaymentOptScr} />
        <Pay isVisible={paymentOptScr} showPaymentOptionScreen={setPaymentOptScr}  />   
        </div>
        <Footer/>
        {/* <Cal/> */}
    </div>
}
export default App;