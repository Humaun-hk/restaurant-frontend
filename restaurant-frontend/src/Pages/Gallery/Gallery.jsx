import { Helmet } from "react-helmet-async";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// Import the images
import img1 from "../../assets/images/Food_Gallery/img1.jpg"
import img2 from "../../assets/images/Food_Gallery/img2.jpg"
import img3 from "../../assets/images/Food_Gallery/img3.jpg"
import img4 from "../../assets/images/Food_Gallery/img4.jpg"
import img5 from "../../assets/images/Food_Gallery/img5.jpg"
import img6 from "../../assets/images/Food_Gallery/img6.jpg"
import img7 from "../../assets/images/Food_Gallery/img7.jpg"
import img8 from "../../assets/images/Food_Gallery/img8.jpg"

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Gallery </title>
      </Helmet>

      <div>
        <div className="App">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-1 sl:grid-cols-2 lg:grid-cols-4 gap-4 p-10"
          >
            <a href={img1}>
              <img alt="Boss" src={img1} />
            </a>
            <a href={img2}>
              <img alt="Boss" src={img2} />
            </a>
            <a href={img3}>
              <img alt="Boss" src={img3} />
            </a>
            <a href={img4}>
              <img alt="Boss" src={img4} />
            </a>
            <a href={img5}>
              <img alt="Boss" src={img5} />
            </a>
            <a href={img6}>
              <img alt="Boss" src={img6} />
            </a>
            <a href={img7}>
              <img alt="Boss" src={img7} />
            </a>
            <a href={img8}>
              <img alt="Boss" src={img8} />
            </a>

           
            {/* <div className="grid grid-cols-4 gap-4 p-10">
            
            </div> */}
           
            
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
