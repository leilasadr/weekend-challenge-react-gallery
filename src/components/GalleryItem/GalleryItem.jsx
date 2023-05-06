import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(true);
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
          console.log("Here's the response from handleLike PUT in Item:", response);
          }).catch((error) => {
            console.log('Error updating likes', error);
          });
      };

    return (
      <ul>
       {showDescription ? <img src={props.path} 
      alt={props.description} 
      onClick={handleFlip} /> : 
        <p>{props.description}</p>
    }
      <div id="flexButt">
      <button onClick={() => {handleLike(props.id)}}>🫶🏽</button>
      </div>

      <p>{props.likes} people 🫶🏽 this</p>
      </ul>
    );
  }
  
  export default GalleryItem;