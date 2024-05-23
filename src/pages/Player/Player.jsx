import React, { useEffect, useState } from 'react';
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  const { id } = useParams();

  const navigate=useNavigate()
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_KEY'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);  // Log the response to see the data structure
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          setError("No video data found");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className='player'>Loading...</div>;
  }

  if (error) {
    return <div className='player'>{error}</div>;
  }

  if (!apiData) {
    return <div className='player'>No data available</div>;
  }

  return (
    <div className='player'>
      <FontAwesomeIcon 
        icon={faBackward} 
        className="back-icon" 
        onClick={() => navigate(-1)}  
      />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0" 
        title='trailer' 
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
  
  
}

export default Player;
