import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGallery()
  }, [{galleryItems}]);

const fetchGallery = () => {
  Axios({
    method: 'GET',
    url: '/gallery' 
  }).then((response) => {
    const theGalleryItems = response.data ;
    setGalleryItems(theGalleryItems);
}).catch((error) => {
  console.log('Uh-Oh! Something went wrong', error);
  
})
}

const handleToggle = (id) => {
  const updatedGalleryItems = galleryItems.map(item => {
    if (item.id === id) {
      return { id:item.id, 
        path:item.path, 
        description:item.description, 
        likes:item.likes};
    }
    return item;
  });
  setGalleryItems(updatedGalleryItems);
}

  
    return (
      <div className="App">
       
       <Header />

       <GalleryList 
       galleryItems={galleryItems} 
       handleToggle={handleToggle}
      />
        
      </div>
    );
}

export default App;
