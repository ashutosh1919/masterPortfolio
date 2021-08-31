import React from "react";
import Button from "../../components/button/Button";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="certificate-card">
      {/**
    
       <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
    
    */}
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        <Button text="View" href={cardInfo.footer} newTab={true} className="btn btn-primary" theme={cardInfo.theme} />
    </div>
    </div>
  );
}
