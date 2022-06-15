import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Header></Header>
      
    </div>
  );
}

export default App;
