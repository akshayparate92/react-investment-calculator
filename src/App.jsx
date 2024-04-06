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
function handleChangeInput(investmentIdentifier , newValue){
  setUserInput( (prevInput) => {
      return {
          ...prevInput,
          [investmentIdentifier] : newValue
      }
  }
  
);
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeInput = {handleChangeInput} />
    <Results input = {userInput}/>
    </>
  )
}

export default App;
