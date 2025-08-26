import React, { useState } from "react";

const App = () => {
  const data = [
    {
      id: "name",
      label: "Name",
      type: "text",
      buttonType: "Next",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      buttonType: "Next",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      buttonType: "Next",
    },
    {
      id: "dob",
      label: "DOB",
      type: "date",
      buttonType: "submit",
    },
  ];
  //store your data in state form and also create a state for dispalying formdata with id
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
const [submitted ,setSubmitted] = useState(false)
  // create a form to sumbit the data
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleFormSubmit = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(name,formData)
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      alert("form submitted");
      setSubmitted(true)
    } else {
      setIndex((p) => p + 1);
    }
  };

  return (
    <div className="app">
      <h2>React MutliStep Form</h2>
     {
      submitted ? (
        <div>
          <h2>Sumitted form Details</h2>
          <hr></hr>
          <span>Name: {formData.name}</span>
          <br></br>
          <span>Email:{formData.email}</span>
           <br></br>
          <span>Password:{formData.password}</span>
           <br></br>z
          <span>Dob:{formData.dob}</span>
          </div>
      ):(
         <form className="container" onSubmit={handleChange}>
        <a href="/"></a>
        <label>{forms[index].label}</label>
        <input
          value={formData[forms[index].id]}
          id={forms[index].id}
          type={forms[index].type}
           name={forms[index].id}
          onChange={handleFormSubmit}
        />
        <button>{forms[index].buttonType}</button>
      </form>
      )
     }
    </div>
  );
};
export default App;
