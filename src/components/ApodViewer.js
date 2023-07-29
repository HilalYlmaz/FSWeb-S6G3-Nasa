import React from "react"

const ApodViewer =(props)=>{
    const {apod}= props;
    return(
        <div>
            <p>{apod.date}</p>
            <p>{apod.explanation}</p>
            <img src={apod.hdurl} alt={apod.explanation}/>
            <p>{apod.media_type}</p>
            <p>{apod.service_version}</p>
            <h1>{apod.title}</h1>
            <img src={apod.url} alt={apod.explanation}/>
            
            
        </div>
    );       
};
export default ApodViewer;