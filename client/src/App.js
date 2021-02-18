import React from "react";
function App() {
  function callBE() {
    let token = ""
    axios.post("http://localhost:5000/callDS", token)
  }
  return (
    <div className="App">
      <button onClick={callBE}>Sign your life away</button> 
    </div>
  );
}

export default App;
