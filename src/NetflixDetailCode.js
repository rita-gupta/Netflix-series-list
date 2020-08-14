import React from 'react';
import './App.css';

function Series (props) {
  return (
    <div className="cards">
      <div className="card">
        <img src = {props.imgsrc} alt = "random pic" className="card_img" />
        <div className="card_info">
          <span classNAme="card_category">{props.sname}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank">
            <button>Watch Now</button>
            </a>
        </div>
      </div>
    </div>
  );
}



export default Series;