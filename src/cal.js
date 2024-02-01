import { useState } from "react";



function Cal()
{

    const [displayValue, setDisplayValue] = useState("");

    const handleButtonClick = (value) => {
      setDisplayValue((prevValue) => prevValue + value);
    };
  
    const handleClear = () => {
      setDisplayValue("");
    };
  
    const handleCalculate = () => {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    };


    return<div>
        <div className="calculator">
          <input type="text" value={displayValue} readOnly />
          <div className="buttons">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
    
            <button onClick={handleClear}>C</button>
            <button onClick={handleCalculate}>=</button>
          </div>
        </div>


    </div>
}
export default Cal;