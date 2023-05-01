import { useState } from 'react';
import './galleryItem.css';
import axios from 'axios';

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setShowDescription(!showDescription);
      }

    const handleLike = (id) => {
      axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
      }).then((response) => {
            props.handleLike(id, response.data.likes);
          }).catch((error) => {
            console.log('Error updating likes', error);
          });
      };

    return (
      <ul>
       {showDescription ? (
        <p>{props.description}</p>
        ) : (
      <img src={props.path} 
      alt={props.description} 
      onClick={handleFlip} />
     )}
      <button onClick={() => {handleLike(props.id)}}>🫶🏽</button>
      <p>{props.likes} likes</p>
      </ul>
    );
  }
  
  export default GalleryItem;