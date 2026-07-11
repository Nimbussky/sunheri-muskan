import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Gallery</h1>
      <div className="gallery-section">
        <div className="gallery-image-container">
          <img src="image1.jpg" alt="Image 1" className="gallery-image" />
          <p className="gallery-image-description">Image 1 description</p>
        </div>
        <div className="gallery-image-container">
          <img src="image2.jpg" alt="Image 2" className="gallery-image" />
          <p className="gallery-image-description">Image 2 description</p>
        </div>
        <div className="gallery-image-container">
          <img src="image3.jpg" alt="Image 3" className="gallery-image" />
          <p className="gallery-image-description">Image 3 description</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
