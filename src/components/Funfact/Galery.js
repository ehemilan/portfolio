import React, { useState, useEffect } from 'react';
import 'react-image-lightbox/style.css'; // Import lightbox styles
import Lightbox from 'react-image-lightbox';
import { AnimatePresence, motion } from "framer-motion";
const renderLightbox = ({ images, photoIndex, setIsOpen, setPhotoIndex }) => {
  console.log(images, photoIndex)
  return (
    <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onCloseRequest={() => setIsOpen(false)}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
      }
      onMoveNextRequest={() =>
        setPhotoIndex((photoIndex + 1) % images.length)
      }
      style={{
        marginTop: 50,
        zIndex: 9999,
      }}
    />
  );
};
const CrossFade = ({ src }) => {
  return (
    <div style={{ position: "relative", width: 250, height: 170 }}>
      <AnimatePresence mode="wait" >
        <motion.img
          key={src}
          whileHover={{
    scale: 1.05,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.15 },
  }}
          src={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
           style={{
              width: '250px',
              height: 'auto',
    border: '2px solid rgba(137, 160, 230, 0.637)',
    boxShadow: '4px 5px 4px 3px rgba(89, 4, 168, 0.137)',
              
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            }}
        />
      </AnimatePresence>
    </div>
  );
};
const ImageWithCaption = ({
  thumbnailsGroups,
  fullImagesGroups,
  captionsGroups,
  index,
  setPhotoIndex,
  setIsOpen,
  setImagesGroup,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center', // középre igazítja a sort
      }}
    >
      {thumbnailsGroups.map((thumbnails, groupIndex) => (
        <div
          key={groupIndex}
          style={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px',
            cursor: 'pointer',
            width: '250px',
          }}
          onClick={() => {
            setPhotoIndex(index[groupIndex]);
            setIsOpen(true);
            setImagesGroup(fullImagesGroups[groupIndex]);
          }}
        >
        <CrossFade src={thumbnails[index[groupIndex]]}  />
          <p>{captionsGroups[groupIndex]}</p>
        </div>
      ))}
    </div>
  );
};
function importAll(r) {
  return r.keys().map((key) => ({
    path: key,
    module: r(key).default || r(key),
  }));
}

function groupByFolder(imagesWithPaths) {
  return imagesWithPaths.reduce((acc, { path, module }) => {
    const folderName = path.split('/')[1] || 'root';

    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName].push(module);
    return acc;
  }, {});
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const MyImageGallery = () => {

  const fullImagesWithPaths = importAll(
    require.context('../../Images/full', true, /\.(jpe?g|png)$/)
  );
  const thumbnailImagesWithPaths = importAll(
    require.context('../../Images/thumbs', true, /\.(jpe?g|png)$/)
  );

  const groupedfulls = groupByFolder(fullImagesWithPaths);

  const fullGroups = Object.values(groupedfulls);

  const groupedThumbnails = groupByFolder(thumbnailImagesWithPaths);

  const thumbnailGroups = Object.values(groupedThumbnails);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const [indexes, setIndexes] = useState(thumbnailGroups.map(group => random(0, group.length)));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexes(thumbnailGroups.map(group => random(0, group.length - 1)));
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, [thumbnailGroups]);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = ''; // Enable scroll when modal is closed
    }
  }, [isOpen]);

  const [imagesGroup, setImagesGroup] = useState(fullGroups[0]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Vertically center the gallery if necessary
        flexDirection: 'column', // Stack thumbnails and lightbox
        minHeight: '100vh', // Optional: center within the full viewport
        marginBottom: '50px'
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
        {
          <ImageWithCaption
            thumbnailsGroups={thumbnailGroups}
            fullImagesGroups={fullGroups}
            captionsGroups={['Hike to top of Badacsony Hill','Night in Budapest','Derby in Kincsem park','Old school vechicles','Nature nearby', 'New year pics', 'Tropicarium', 'Winter in my city', 'Winter at daylight']}

            index={indexes}
            setPhotoIndex={setPhotoIndex}
            setIsOpen={setIsOpen}
            setImagesGroup={setImagesGroup}
          />
        }
      </div>

      {/* Lightbox */}
      {isOpen &&
        renderLightbox({
          images: imagesGroup,
          photoIndex,
          setIsOpen,
          setPhotoIndex,
        })}
    </div>
  );
};


export default MyImageGallery;