import React from 'react';
import './App.css';
import Series from './NetflixDetailCode';
import Sdata from './Sdata';

function nseries(val){
  return(

    <Series
    imgsrc={val.imgsrc}
    sname={val.sname}
    title= {val.title}
    link = {val.link}    
    />

  )};

 

  

function App() {
  return (
    <div>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    
    {Sdata.map(nseries)};
    </div>
    
  );
}

export default App;
