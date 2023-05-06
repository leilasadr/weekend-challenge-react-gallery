import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList(props) {
  
    return (
     <div className="gallery">
       {props.galleryItems.map((item) => (
        <GalleryItem 
        id={item.id} 
        path={item.path} 
        description={item.description} 
        likes={item.likes} 
        showDescription={item.showDescription} 
        handleToggle={props.handleToggle}
        handleLike={props.handleLike} />
      ))}

     </div>
        
    );
  }
  
  export default GalleryList;