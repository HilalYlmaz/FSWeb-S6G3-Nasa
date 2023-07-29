import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import ApodViewer from "./components/ApodViewer";
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1999-01-07




function App() {
  const [apod, setApod]= useState();
  const [loaded, setLoaded]= useState(false);
  const [currentDate, setCurrentDate]= useState(new Date().toISOString().split("T")[0]);
  const fetchApod = (dateParam)=>{
    setLoaded(false);
    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: "VaWY0QWoiwxpbpEVB1Hq7DscFXODkUUCvxkbHrDw",
        date:dateParam,
      }
    })
    .then(function (response) {
      console.log(response.data);
      setApod(response.data);
      setLoaded(true);
    })
    .catch(function (error) {
      console.log(error);
      setLoaded(false);
    })
    .finally(function () {
      // always executed
    });
  }
  useEffect(()=>{
    fetchApod(currentDate);
  },[currentDate]);

  function dateChangeHandler(e){
    console.log(e.target.value);
    setCurrentDate(e.target.value);
  }
  return (
    <div className="App">
        {!loaded && <p>yükleniyor</p>}      
        {loaded && <>
          <label htmlFor="apodDate"> apodDate: </label>
         <input
          onChange={(e)=>dateChangeHandler(e)}
          type="date"
          value={currentDate}
          name="apodDate"
         ></input>
          <ApodViewer apod={apod}/>
        </>
       }
    </div>
  );
}

export default App;
