import React from 'react';
import GoogleMap from './GoogleMap';
import './LandingPage.css'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to My Awesome App</h1>
      </header>
      <div className="map-container">
        <GoogleMap />
      </div>
      <footer>
        <p>© 2024 My Awesome App</p>
      </footer>
    </div>
  );
}

export default LandingPage;