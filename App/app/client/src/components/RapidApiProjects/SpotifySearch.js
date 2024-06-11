import React, { useState } from 'react';
import axios from 'axios';
import '../RapidApiProjects/Spotify.css'

const SpotifySearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  console.log(searchResults, "searchResults")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchTracks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://spotify23.p.rapidapi.com/search/', {
        params: { q: query },
        headers: {
          'x-rapidapi-key': '65151c1003mshea0737bec13563fp1f1cc0jsn5016d32429c8',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      });
      console.log(response.data, "response.data.tracks.items")
      setSearchResults(response.data.tracks.items);
      setLoading(false);
    } catch (error) {
      console.error('Error searching tracks:', error);
      setError('Error searching tracks. Please try again.');
      setLoading(false);
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      searchTracks();
    } else {
      setError('Please enter a search query.');
    }
  };

  return (
    <div  className="spotify-search-container">
      <h2>Spotify Track Search</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} placeholder="Enter search query" />
        <button className='ButtonColor' type="submit" disabled={loading}>Search</button>
        <h2>Search Results</h2>
      </form>

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {searchResults?.length > 0 && (
        <div className='Search'>

          <ul>
            {searchResults?.map((track) => (
              <li key={track.data.id}>{track.data.name} -
               {track.data.artists.items.map(artist => artist.profile.name)}
               </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SpotifySearch;