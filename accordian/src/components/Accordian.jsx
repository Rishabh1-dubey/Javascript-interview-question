import React, { useState } from "react";

const Accordian = () => {
  const data = [
    {
      title: "React.js",
      content: "Let's learn nodejs in 10 min",
    },
    {
      title: "Express.js",
      content: "Let's learn nodejs in 10 min",
    },
    {
      title: "Mongodb.js",
      content: "Let's learn nodejs in 10 min",
    },
    {
      title: "prisma.js",
      content: "Let's learn nodejs in 10 min",
    },
  ];

const [open , setOpen] = useState(null)


const toggleHandle =(index)=>{
setOpen(open === index ? null : index)
}

  return (
    <div className="accordian">
      {data.map((item, index) => (
        <div key={index} className="accordian-item">
           <button  onClick={()=>toggleHandle(index)}  className="title">{item.title}
            <span>{open ===index  ? "-" : "+"}</span>
          </button>
         {open === index && <div className="content">{item.content}</div>} 
        </div>
      ))}
    </div>
  );
};

export default Accordian;
