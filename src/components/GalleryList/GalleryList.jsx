import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    return (
     <ul>
       {props.galleryItems.map((item) => (
        <GalleryItem key={item.id} id={item.id} path={item.path} description={item.description} likes={item.likes} />
      ))}

     </ul>
        
    );
  }
  
  export default GalleryList;