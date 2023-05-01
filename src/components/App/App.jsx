import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGallery()
}, []);

const fetchGallery = () => {
  axios({
    method: 'GET',
    url: '/gallery' 
  }).then((response) => {
    const theGalleryItems = response.data ;
    console.log(theGalleryItems);
    setGalleryItems(theGalleryItems);
}).catch((error) => {
  console.log('Uh-Oh! Something went wring', error);
})
}
  
    return (
      <div className="App">
       
       <Header />
       <GalleryList galleryItems={galleryItems} />
        
      </div>
    );
}

export default App;
