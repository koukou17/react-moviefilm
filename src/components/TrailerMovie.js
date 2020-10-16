import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MoviesData } from "./MoviesData";
import Button from 'react-bootstrap/Button';

 function TrailerMovie({match}) {
  const movievd = MoviesData.find(({ title }) => title === match.params.title);
  return (
    <Link to={`/trailermovie/${movievd.title}`}> 
     <div className="video">
        <ReactPlayer url={movievd.video} width="340px" />
        <div className="text">
          <h2> overview: </h2>
          <p>{movievd.description}</p>
          </div>
          <Link to="/">
          <Button variant="info">Home</Button>
          </Link>
        
      </div>
      </Link>
  );
};
export default TrailerMovie;