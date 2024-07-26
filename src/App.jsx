// App.jsx
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./context/UseCountry";
function App() {
  return (
    <div>
      <CountryProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="detail/:name" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </CountryProvider>
    </div>
  );
}

export default App;
