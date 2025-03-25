import React, { useState } from "react";
import Profile from "./Profile";
import About from "./About";
import interest from "./Interest";
const Tabform = () => {

  const[changeTab ,setchageTab] = useState(0)
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "About",
      component: About,
    },
    {
      name: "Interest",
      component: interest,
    },
  ];

  const TabChangeComponet = tabs[changeTab].component
  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab , index) => (
          <div onClick={()=>setchageTab(index)} className="heading">{tab.name}</div>
        ))}
      </div>

      <div className="tab-body"><TabChangeComponet/></div>
    </div>
  );
};

export default Tabform;
