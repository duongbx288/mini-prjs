import { useState } from "react";
import Search from "./components/Search";
import './assets/App.css';


function App() {

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
