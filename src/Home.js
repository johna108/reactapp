// Home.js
import React, { useState } from 'react';
import './home.css'; // Import CSS file for styling

function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // State for storing search term
  const artworks = [
    { id: 1, imageUrl: '/art1.jpg', title: 'Artwork 1' },
    { id: 2, imageUrl: '/art2.jpg', title: 'Artwork 2' },
    { id: 3, imageUrl: '/download.jpg', title: 'Artwork 3' },
    // Add more artworks as needed
  ];

  // Filter artworks based on search term
  const filteredArtworks = artworks.filter(artwork =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h2>Home</h2>
        <p>This is the home page of the Online Art Gallery.</p>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search artworks..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {/* Buttons */}
        <div className="buttons">
          <button className="buy-button">Buy</button>
          <button className="sell-button">Sell</button>
        </div>
        {/* Artworks */}
        <div className="artworks-container">
          {filteredArtworks.map((artwork) => (
            <div key={artwork.id} className="artwork-box">
              <img src={process.env.PUBLIC_URL + artwork.imageUrl} alt={artwork.title} />
              <h3>{artwork.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
