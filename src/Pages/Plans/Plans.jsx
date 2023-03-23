import Header from "../../Components/Header";
import HeaderImage from "../../Pictures/images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../Data";
import "./Plans.css";

const Plans = () => {
  return (
    <>
      <Header Title="MemberShips Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
        alias debitis cupiditate, asperiores tenetur.
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>{features}</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ''} >{feature}</p>
                  );
                })}
                <button className="btn lg">Choose plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
