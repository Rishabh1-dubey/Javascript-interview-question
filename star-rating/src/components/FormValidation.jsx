import React, { useState } from "react";

const formInput = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
  

  },
  {
    name: "email",
    type: "text",
    placeholder: "Enter Your email",
       
  },
  {
    name: "password",
    type: "text",
    placeholder: "Enter Your password",
         
  },
];

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

const onSubmit=(e)=>{
  setFormData(prev=>({
...prev,[e.target.name]:(e.target.value)
  }))
}


const handleChanger=(e)=>{
e.preventDefault()
console.log("form data", formData)
}



  return (
    <div>
      <form onSubmit={handleChanger}>
        {formInput.map((filed) => (
          <div>{` ${filed.name}`}{" "}
            <input
            key={filed.name}
              type={filed.type}
              placeholder={filed.placeholder}
              name={filed.name}
              value={formData[filed.name]}
              onChange={onSubmit}
            />
          </div>
        ))}
      <button>Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
