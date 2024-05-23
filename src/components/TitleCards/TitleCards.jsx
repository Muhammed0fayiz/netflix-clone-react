import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTBkODIyNjE3NjM2N2YzNmZhZjg5ZjQ2Nzk3YTAzNSIsInN1YiI6IjY2NDg3NjkxNzUwOTY5OGEwMTFkNGI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b-PKFSXcA2NbuI926ctztrGSTm8v2jeRs5ozeEloE54",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${encodeURIComponent(category?category:"now_playing")}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflex"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.poster_path}
                alt={card.name}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
