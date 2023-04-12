import { useState } from "react";
import Search from "./components/search/Search";
import './assets/App.css';
import Weather from "./components/weather/Weather";


function App() {

  const handleOnSearchChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");
    console.log(searchData);

  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <Weather />
    </div>
  );
}

export default App;
