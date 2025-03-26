import "./App.css";
import TabForm from "./components/TabForm";
import { useTheme } from "./theme-context";

function App() {
  const { theme, toggelTheme } = useTheme();

  console.log(theme);

  return (
    <>

      <div>hello</div>
    

      <div>
        <label>
          <input
            onChange={toggelTheme}
            type="checkbox"
            checked={theme === "dark"}
          />
        </label>
      </div>
    </>
  );
}

export default App;
