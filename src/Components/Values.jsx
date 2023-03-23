import Image from '../Pictures/images/values.jpg';
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import {values} from '../Data';
import Card from '../UI/Card';

const Values = () => {
  return (
   <section className='values'>
    <div className="container values_container">
        <div className="values_left">
            <div className="values_image">
                <img src={Image} alt="values Image"/>
            </div>
        </div>
        <div className="values_right">
            <SectionHead icon={<GiCutDiamond/>} title="values"/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugit deleniti magni suscipit, minima nemo?
            </p>
            <div className="values_wrapper">
                {
                    values.map(({id, icon, title, desc})=>{
                        return <Card key={id} className="values_value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                    })
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values