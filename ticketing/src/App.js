
import React from "react";

import './App.scss';
// import  { Login }  from "./components/login/index";
import  Ticket from "./components/ticket/ticket";

 class App extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
  return (
    <div className="App">
    {/* <Login /> */}
    <Ticket />
   
  </div>
  );
}

}
export default App;