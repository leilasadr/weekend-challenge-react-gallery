import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    return (
     <div>
       {props.galleryItems.map((item) => (
        <GalleryItem key={item.id} id={item.id} path={item.path} description={item.description} likes={item.likes} />
      ))}

     </div>
        
    );
  }
  
  export default GalleryList;