import Header from '../../Components/Header';
import HeaderImage from '../../Pictures/images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo soluta officiis dolores enim velit iste commodi ut, et ad!
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:support@egator.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achiver" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+1234656" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>



    </>
  )
}

export default Contact