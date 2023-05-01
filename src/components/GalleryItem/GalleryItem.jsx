import { useState } from 'react';
import './galleryItem.css';

function GalleryItem(props) {
    return (
      <ul>
        <img src={props.path} alt={props.description} />
        <div>
          <p>{props.description}</p>
          <button>Like</button>
          <p>{props.likes} likes</p>
        </div>
      </ul>
    );
  }
  
  export default GalleryItem;