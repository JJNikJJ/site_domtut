import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
