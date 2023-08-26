import "./App.css";
import MiniPage from "./component/leftSide/MiniPage";
import MainPage from "./component/rightSide/MainPage";
function App() {
  return (
    <div classname="App">
      <div className="time">
        <div>
          <MiniPage></MiniPage>
        </div>
        <div>
          <MainPage></MainPage>
        </div>
      </div>
    </div>
  );
}

export default App;
