
import Accordian from "./components/Accordian";
import { data } from "./data";

function App() {
  return (
    <div className="accordion-container">
      {data.map((item) => (
        <div key={item.id}>
          <Accordian title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
}

export default App;
