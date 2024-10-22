import Counter from "../../components/Counter/Counter.jsx";
import Timer from "../../components/Timer/Timer.jsx";
import Add from "../../components/Add/Add.jsx"
import Temperatures from "../../components/Temperatures/Temperatures.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Components.css";

function App() {
  return (
    <div className="Com-big">
      <h3 className="head-con">REACT COMPONET</h3>

      <div className="con">
        <div>
          <Counter />
          <Timer />
        </div>
        <div>
          <Add />
        </div>
      </div>
      <div>
        <Temperatures />
      </div>

      <h3 className="guy">นาย พีรพัฒน์ ดอกสันเทียะ 66063367</h3>
    </div>
  );
}

export default App;
