import React from "react";

export default function AchivementCard({ cardInfo }) {
  const links = Array.isArray(cardInfo.footer) ? cardInfo.footer : [];
  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {links.map((link, index) => (
          <a
            key={`${link.url}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
