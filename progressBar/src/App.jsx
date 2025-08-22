import { useEffect, useState } from "react";

import "./App.css";
import ProgressBarPro from "./componets/ProgressBar_Pro"
import TodoList from "./componets/todoList/todoList";
// export const AkshayProgress = ({ progress }) => {
//   const [animatedProgress, setAnimatedProgress] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimatedProgress(progress);
//     }, 100);
//   }, [progress]);

//   return (
//     <div className="outer">
//       <div
//         style={{
//           // width: `${progress}%`,f
//           transform: `translateX(${animatedProgress - 100}%)`,
//           color: progress < 5 ? "black" : "white",
//         }}
//         role="progressbar"
//         aria-valuenow={progress}
//         aria-valuemax="100"
//         aria-valuemin="0"
//         className="inner"
//       >
//         {" "}
//         {progress}%
//       </div>
//     </div>
//   );
// };

function App() {
// const prog =[5,10,15,40,56,79,100]



const[progress,setProgress]= useState(0)

useEffect(()=>{
const timer =setInterval(() => {
   if(progress<100){
    setProgress((p)=>p+1)
   }
}, 50);

 return(()=>{
clearInterval(timer)
 })
},[progress])



  return (
    <div className="app">
      {/* <span>Progres Bars</span>
      {
        prog.map((value)=>(
          <div>
            <AkshayProgress key={value} progress={value} />
            </div>
        ))
      } */}
      <ProgressBarPro progress={progress} color={"lightgreen"} />
      <TodoList/>

    </div>
  );
}

export default App;
