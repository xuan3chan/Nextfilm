import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-skeleton movie-item">
        <div className="movie-category"></div>
        <div className="over-image">
          <div className="skeleton movie-poster"></div>
          <div className="movie-category"></div>
        </div>
        <div className="text-section">
          <div className="skeleton movie-name"></div>
          <div className="skeleton movie-category"></div>
          <div className="skeleton movie-category"></div>
          <div className="skeleton movie-category"></div>
          <div className="skeleton movie-category"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
