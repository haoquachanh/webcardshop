import React, { useEffect, useState } from 'react';

const fetchImages = async () => {
  try {
    const url = 'https://api.cloudinary.com/v1_1/djchyv9o9/resources/image';
    const apiKey = '269972865434146';
    const apiSecret = '4iMBA0LMPv8GADqgLrFWcVSm2Dw';

    const response = await fetch(url, {
      mode:'no-cors',
      method:'GET',
      headers: {
        Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
      }
    });

    const data = await response.json();

    return data.resources;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };

    getImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.public_id}
          src={image.url}
          alt={image.public_id}
          style={{ width: '200px', height: 'auto' }}
        />
      ))}
    </div>
  );
};
export default ImageGallery