import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/homePage/home";
import Activities from "./pages/activitiesPage/activities";
import Analytics from "./pages/analyticsPage/analytics";
import Transformation from "./pages/transformationPage/transformation";
import Library from "./pages/libraryPage/library";
import Settings from "./pages/settingsPage/settings";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
