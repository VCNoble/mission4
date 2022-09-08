import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CICD from "./pages/CICD";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/cicd" element={<CICD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
