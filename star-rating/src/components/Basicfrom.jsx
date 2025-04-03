import React, { useState } from "react";

const Basicfrom = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });



const handleChangehandler=(e)=>{
    setFromData(prev=>({
...prev ,[e.target.name]:(e.target.value)
    }))
}



const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("Thir form data is " , formData)
}


  return (
    <div className="input">
      <form onSubmit={onSubmitHandler}>
        <input value={formData.name} onChange={handleChangehandler} type="text" placeholder="enter your name" name="name" />
        <input value={formData.email} onChange={handleChangehandler} type="text" placeholder="enter your email" name="email" />
        <input value={formData.password} onChange={handleChangehandler} type="text" placeholder="enter your password" name="password" />

    <button>Submit</button>
      </form>
    </div>
  );
};

export default Basicfrom;
