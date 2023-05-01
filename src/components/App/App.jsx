import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Axios from 'axios';
// import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGallery()
  }, []);

const fetchGallery = () => {
  Axios({
    method: 'GET',
    url: '/gallery' 
  }).then((response) => {
    const theGalleryItems = response.data ;
    console.log(theGalleryItems);
    setGalleryItems(theGalleryItems);
}).catch((error) => {
  console.log('Uh-Oh! Something went wrong', error);
  
})
}

const handleLike = (id) => {
  Axios({
  method: 'PUT',
  url: `/gallery/like/${id}`
  }).then(response => {
      const updatedGalleryItems = galleryItems.map(item => {
        if (item.id === id) {
          return { 
            id:item.id, 
            path:item.path, 
            description:item.description, 
            likes:response.data.likes };
        } else{
        return item;
      }});
      setGalleryItems(updatedGalleryItems);
    }).catch(error => console.log('Error updating likes:', error));
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
       handleLike={handleLike}/>
        
      </div>
    );
}

export default App;
