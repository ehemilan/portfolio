import React, { useState , useEffect} from 'react';
import 'react-image-lightbox/style.css'; // Import lightbox styles
import Lightbox from 'react-image-lightbox';

// Importing images
import IMG_0079 from '../../Images/IMG_0079.JPG';
import IMG_0092 from '../../Images/IMG_0092.JPG';
import IMG_0093 from '../../Images/IMG_0093.JPG';
import IMG_0108 from '../../Images/IMG_0108.JPG';
import IMG_0124 from '../../Images/IMG_0124.JPG';
import IMG_0125 from '../../Images/IMG_0125.JPG';
import IMG_0130 from '../../Images/IMG_0130.JPG';
import IMG_0151 from '../../Images/IMG_0151.JPG';
import IMG_0158 from '../../Images/IMG_0158.JPG';
import IMG_0161 from '../../Images/IMG_0161.JPG';
import IMG_0169 from '../../Images/IMG_0169.JPG';

import IMG_0079_T from '../../Images/IMG_0079_T.jpg';
import IMG_0092_T from '../../Images/IMG_0092_T.jpg';
import IMG_0093_T from '../../Images/IMG_0093_T.jpg';
import IMG_0108_T from '../../Images/IMG_0108_T.jpg';
import IMG_0124_T from '../../Images/IMG_0124_T.jpg';
import IMG_0125_T from '../../Images/IMG_0125_T.jpg';
import IMG_0130_T from '../../Images/IMG_0130_T.jpg';
import IMG_0151_T from '../../Images/IMG_0151_T.jpg';
import IMG_0158_T from '../../Images/IMG_0158_T.jpg';
import IMG_0161_T from '../../Images/IMG_0161_T.jpg';
import IMG_0169_T from '../../Images/IMG_0169_T.jpg';

const MyImageGallery = () => {
  const images = [
    IMG_0079,
    IMG_0092,
    IMG_0093,
    IMG_0108,
    IMG_0124,
    IMG_0125,
    IMG_0130,
    IMG_0151,
    IMG_0158,
    IMG_0161,
    IMG_0169,
  ];
  const imagesT = [
    IMG_0079_T,
    IMG_0092_T,
    IMG_0093_T,
    IMG_0108_T,
    IMG_0124_T,
    IMG_0125_T,
    IMG_0130_T,
    IMG_0151_T,
    IMG_0158_T,
    IMG_0161_T,
    IMG_0169_T,
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = ''; // Enable scroll when modal is closed
    }
  }, [isOpen]);
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Vertically center the gallery if necessary
      flexDirection: 'column', // Stack thumbnails and lightbox
      minHeight: '100vh', // Optional: center within the full viewport
      marginBottom:'50px'
    }}
  >
      <h1 className="project-heading">
        My <strong className="purple">Gallery </strong>
      </h1>
      <p style={{ color: "white", marginBottom: 40 }}>
        My new hobby is photography. The real freedom, when you start walking and searching the beauties of the world. Let's enjoy my pictures.
      </p>
    {/* Render Thumbnails */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center thumbnails horizontally
        flexWrap: 'wrap',
        gap: '10px', // Space between thumbnails
        maxWidth: '80%', // Optional: limits the width of the gallery
      }} >
        {imagesT.map((image, index) => (
            
          <img className="picture-icons"
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: '250px',
              height: 'auto',
              
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
            <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]} // Loop to the next image
          prevSrc={images[(photoIndex + images.length - 1) % images.length]} // Loop to the previous image
          onCloseRequest={() => setIsOpen(false)} // Close lightbox
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          } // Navigate to the previous image
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          } // Navigate to the next image
          style={{
            marginTop:50,
            zIndex: 9999, // Ensure lightbox is in front of everything else
          }}
        />
        
      )}
    </div>
  );
};


export default MyImageGallery;