import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./auth/components";
import {
  CardStarship,
  Header,
  Home,
  StarshipsList,
  Navbar,
} from "./main/components";

function App() {
  const [starships, setStarships] = useState(() => {
    const starships = localStorage.getItem("starships");
    return starships ? JSON.parse(starships) : [];
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/starships"
            element={
              <StarshipsList
                starships={starships}
                setStarships={setStarships}
              />
            }
          />

          <Route
            path="/starships/card/:nameParam"
            element={<CardStarship starships={starships} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
