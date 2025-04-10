import { useState, useTransition } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Enter your Name",
    },
    {
      id: "email",
      label: "email",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Enter your email",
    },
    {
      id: "password",
      label: "password",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Enter your password",
    },
    {
      id: "dob",
      label: "Dob",
      inputType: "date",
      buttonName: "submit",
      placeholder: "",
    },
  ];

  const [form, setFrom] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (index === form.length - 1) {
      console.log("form submitted");
      setFormSubmitted(true)
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    const copyFromData = { ...formData };
    copyFromData[id] = value;
    setFormdata(copyFromData);
  };
  console.log("formData", formData);

  return (
    <div className="app">
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}
    
       {
        !formSubmitted ? (
          <form onSubmit={handleClick} className="container">
          <label>{form[index].label}</label>
          <input
            value={formData[form[index].id]}
            id={form[index].id}
            onChange={handleInputChange}
            type={form[index].inputType}
            placeholder={form[index].placeholder}
          />
          <button className="btn">{form[index].buttonName}</button>
        </form>
        ):(
          <div className="success">
          <h1>Sucess</h1>
          <p> Name:{formData.name}</p>
          <p>Emaill:{formData.email}</p>
          <p>Password:{formData.password}</p>
          <p>Dob:{formData.dob}</p>
        </div>
        )
       }
    
      
     
    </div>
  );
}

export default App;
