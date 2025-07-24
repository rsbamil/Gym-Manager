import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      duration: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEARLY",
      price: 34000,
      duration: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      duration: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((elem, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={elem.imgUrl} alt={elem.title} />
              <div className="title">
                <h1>{elem.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {elem.price}</h3>
                <p>For {elem.duration} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> EQUIPMENT
                </p>
                <p>
                  <Check /> ALL DAY FREE TRAINING
                </p>
                <p>
                  <Check /> FREE RESTROOM
                </p>
                <p>
                  <Check /> 24/7 SKILLED SUPPORT
                </p>
                <p>
                  <Check /> 20 DAYS FREEZING OPTION
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
