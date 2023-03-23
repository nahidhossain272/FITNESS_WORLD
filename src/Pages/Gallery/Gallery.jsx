import Header from '../../Components/Header';
import HeaderImage from '../../Pictures/images/header_bg_3.jpg';


import './Gallery.css';

const Gallery = () => {

  const galleryLength=15;
  const images=[]


for(let i=1; i<= galleryLength;i++){
  images.push(require(`../../Pictures/images/gallery${i}.jpg`))
}
  return (
    <>
   <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquam possimus autem aliquid veritatis quisquam. Quam, eaque distinctio!
   </Header>
   <section className="gallery">
    <div className="container gallery_container">
      {
        images.map((image, index)=>{
          return <article key={index}>
            <img src={image} alt={`Gallery image ${index+1}`}/>
          </article>
        })
      }
    </div>
   </section>
   </>
  )
}

export default Gallery