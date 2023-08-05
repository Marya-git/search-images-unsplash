import './ImageShow.css';

function ImageShow({ image }) {
  return (
    <div className='imgdiv' >
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
