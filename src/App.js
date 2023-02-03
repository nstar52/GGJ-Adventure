import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import HomePage from "./pages/Home_page";
import PlayerUI from "./pages/Player_UI";
import Constants from "./data/Constants";
import EndPage from "./pages/End_page";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/story"
          element={<PlayerUI dialogs={Constants.textNodes} />}
        />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
}

export default App;
