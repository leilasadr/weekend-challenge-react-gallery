import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    // const [galleryItems, setGalleryItems] = useState(props.galleryItems.map(item => ({ id:item.id, path:item.path, description:item.description, likes:item.likes, showDescription:false })));



    return (
     <div className="gallery">
       {props.galleryItems.map((item) => (
        <GalleryItem key={item.id} 
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