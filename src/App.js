import logo from "./logo.svg";
import "./App.css";
import Dropdownlist from "./components/Dropdownlist";
import Dropdownheading from "./components/Dropdownheading";
function App() {
  const data = {
    "PyTorch Build": ["Stable (1.11.0)", "Preview (Nightly)", "LTS (1.8.2)"],
    "Your OS": ["Linux", "Mac", "Windows"],
    Package: ["Conda", "Pip", "LibTorch", "Source"],
    Language: ["Python", "C++ / Java"],
    "Compute Platform": ["CUDA 10.2", "CUDA 11.3", "ROCm 4.2 (beta)", "CPU"],
    "Run this Command": [],
  };
  const headings = Object.entries(data).map((item) => {
    return (
      <div>
        <Dropdownheading name={item[0]} />
        <Dropdownlist list={item[1]} />
      </div>
    );
  });
  return (
    <div class="row">
      <div class="col-md-3 headings">{headings}</div>
    </div>
  );
}

export default App;
