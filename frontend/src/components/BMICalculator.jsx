import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please Enter valid height,weight and gender");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmi < 18.5) {
      toast.warning(
        `You are underweight. Consider seeking advice from a healthcare provider. Your BMI is ${bmiValue} `
      );
    } else if (bmi > 18.5 && bmi < 24.9) {
      toast.success(
        `You are normal weight. Keep maintaining a healthy lifestyle. Your BMI is ${bmiValue} `
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      toast.warning(
        `You are over weight. Consider seeking advice from a healthcare provider. Your BMI is ${bmiValue} `
      );
    } else {
      toast.error(
        `You are at critical weight. Consider seeking advice from a healthcare provider. Your BMI is ${bmiValue} `
      );
    }
  };

  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Gender </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmi" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
