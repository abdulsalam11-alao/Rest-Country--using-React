// App.jsx
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./context/UseCountry";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <div>
      <ThemeProvider>
        <CountryProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="detail/:name" element={<DetailsPage />} />
            </Routes>
          </BrowserRouter>
        </CountryProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
