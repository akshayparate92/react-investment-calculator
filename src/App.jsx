import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 5,
    duration : 10,
});
const inputIsValid = userInput.duration >=1;
function handleChangeInput(investmentIdentifier , newValue){
  setUserInput( (prevInput) => {
      return {
          ...prevInput,
          [investmentIdentifier] : +newValue
      }
  }
  
);
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeInput = {handleChangeInput} />
    {!inputIsValid && <p className="center">PLease Enter a duration greater then zero.</p>}
    {inputIsValid && <Results input = {userInput}/>}
    </>
  )
}

export default App;
