"use client"
import React from "react";
import classes from '../styles/Card.module.css';
import ReactPlayer from "react-player";

const data = [
  {
    id: "1",
    videoLink: "https://youtu.be/ER9SspLe4Hg",
    description: "Complete JavaScript tutorial",
  },
  {
    id: "2",
    videoLink: "https://youtu.be/BsDoLVMnmZs",
    description: "Complete HTML tutorial",
  },
  {
    id: "3",
    videoLink: "https://youtu.be/Edsxf_NBFrw",
    description: "Complete CSS tutorial",
  },
  {
    id: "4",
    videoLink: "https://youtu.be/tiLWCNFzThE",
    description: "Complete React tutorial",
  },
  {
    id: "5",
    videoLink: "https://youtu.be/IIpiLZGTWuo",
    description: "Complete Node tutorial",
  },
];

const Card = () => {
  return (
    <div className={classes.mainsection}>
      <div className={classes.container}>
        <div className={classes.cards}>
          {data.map((card, i) => (
            <div key={i} className={classes.card}>
              {card.videoLink && (
                <ReactPlayer
                  url={card.videoLink}
                  className={classes.player}
                  controls
                  width="100%"
                  height="auto"
                />
              )}
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;




