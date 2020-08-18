import React from 'react';
import './App.css';
import Series from './NetflixDetailCode';
import Sdata from './Sdata';


function App() {
  return (
    <div>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    
  
    <Series
    imgsrc={Sdata[0].imgsrc}
    sname={Sdata[0].sname}
    title= {Sdata[0].title}
    link = {Sdata[0].link}    
    />

    <Series
    imgsrc={Sdata[1].imgsrc}
    sname={Sdata[1].sname}
    title= {Sdata[1].title}
    link = {Sdata[1].link} 
     />

    <Series 
    imgsrc={Sdata[2].imgsrc}
    sname={Sdata[2].sname}
    title= {Sdata[2].title}
    link = {Sdata[2].link} 
    />


    
    </div>
    
  );
}

export default App;
