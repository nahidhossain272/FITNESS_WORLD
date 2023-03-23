import { Link } from "react-router-dom";
import Image from '../Pictures/images/main_header.png';

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore doloremque tempora dicta cumque modi.
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header image"/>
          </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader
