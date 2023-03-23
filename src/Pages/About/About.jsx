import Header from '../../Components/Header';
import HeaderImage from '../../Pictures/images/header_bg_1.jpg';
import StoryImage from '../../Pictures/images/about1.jpg';
import VisionImage from '../../Pictures/images/about2.jpg';
import MissionImage from '../../Pictures/images/about3.jpg';
import './About.css';

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus fuga id molestias aperiam, veritatis soluta dolore distinctio alias corrupti.
    </Header>
    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} aboutlt="Our Story Image"/>
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis temporibus harum mollitia dolorum quas numquam nesciunt quis iste at fuga vel eveniet exercitationem error, sit inventore optio natus accusamus pariatur id quia dolor labore blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam provident temporibus nobis asperiores perspiciatis! Cupiditate similique molestiae beatae a ipsam, hic est? Dolorem suscipit similique quaerat architecto!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates eveniet deleniti a aliquid consectetur inventore dolor ea!
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis temporibus harum mollitia dolorum quas numquam nesciunt quis iste at fuga vel eveniet exercitationem error, sit inventore optio natus accusamus pariatur id quia dolor labore blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam provident temporibus nobis asperiores perspiciatis! Cupiditate similique molestiae beatae a ipsam, hic est? Dolorem suscipit similique quaerat architecto!
          </p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} aboutlt="Our vision Image"/>
        </div>
      </div>
    </section>

    <section className="about_Mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={ MissionImage} aboutlt="Our mission Image"/>
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis temporibus harum mollitia dolorum quas numquam nesciunt quis iste at fuga vel eveniet exercitationem error, sit inventore optio natus accusamus pariatur id quia dolor labore blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam provident temporibus nobis asperiores perspiciatis! Cupiditate similique molestiae beatae a ipsam, hic est? Dolorem suscipit similique quaerat architecto!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptates eveniet deleniti a aliquid consectetur inventore dolor ea!

          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About