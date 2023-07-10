"use client"
import React from "react";
import { useEffect, useState } from "react";
import classes from "../styles/Card.module.css";
import ReactPlayer from "react-player";

import Link from "next/link";

const data = [
  {
    id: "1",
    videoLink: "https://youtu.be/ER9SspLe4Hg",
    description: "Complete JavaScript tutorial! Learn Basic to Advance level",
    duration:"Duration:13:46",
  },
  {
    id: "2",
    videoLink: "https://youtu.be/uX9OsJQ7FJY",
    description: "Complete HTML tutorial! Learn Basic to Advance level",
    duration:"Duration:8:27",
  },
  {
    id: "3",
    videoLink: "https://youtu.be/EZ5q8sW3Glo",
    description: "Complete CSS tutorial! Learn Basic to Advance level",
    duration:"Duration:7:06"
  },
  {
    id: "4",
    videoLink: "https://youtu.be/tiLWCNFzThE",
    description: "Complete React tutorial! Learn Basic to Advance level",
    duration:"Duration:13.30"
  },
  {
    id: "5",
    videoLink: "https://youtu.be/IIpiLZGTWuo",
    description: "Complete Node tutorial! Learn Basic to Advance level",
    duration:"Duration:18:20"
  },
];

const Card = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleVideoClick = (id) => {
    
  };


  return (
    <div className={classes.mainsection}>
      <div className={classes.container}>
        <div className={classes.cards}>
          {data.map((card) => (
            <Link href={`/MainSection/${card.id}`} key={card.id}>
              <div className={classes.card} onClick={() => handleVideoClick(card.id)}>
                {isClient && card.videoLink && (
                  <ReactPlayer
                    url={card.videoLink}
                    className={classes.player}
                    controls
                    width="100%"
                    height="auto"
                  />
                )}
                <p>{card.description}</p>
                <h4>{card.duration}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;



