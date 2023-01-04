import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./auth/components";
import { LoginPage } from "./auth/components/LoginPage/LoginPage";
import { UserProvider } from "./auth/context/UserProvider";
import {
  CardStarship,
  Header,
  Home,
  StarshipsList,
  Navbar,
  FilmsPage,
} from "./main/components";
import { PilotsPage } from "./main/components/PilotsPage/PilotsPage";
import { PrivateRoutes } from "./router/PrivateRoutes";
import { PublicRoutes } from "./router/PublicRoutes";

function App() {
  const [starships, setStarships] = useState(() => {
    const starships = localStorage.getItem("starships");
    return starships ? JSON.parse(starships) : [];
  });

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="*/" element={<Navigate to={"/home"} />} />

            <Route
              path="/signup"
              element={
                <PublicRoutes>
                  <RegisterPage />
                </PublicRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <LoginPage />
                </PublicRoutes>
              }
            />

            <Route
              path="/starships"
              element={
                <PrivateRoutes>
                  <StarshipsList
                    starships={starships}
                    setStarships={setStarships}
                  />
                </PrivateRoutes>
              }
            />

            <Route
              path="/starships/:nameParam"
              element={
                <PrivateRoutes>
                  <CardStarship starships={starships} />
                </PrivateRoutes>
              }
            />
            <Route
              path="/starships/:nameParam/pilots"
              element={
                <PrivateRoutes>
                  <PilotsPage starships={starships} />
                </PrivateRoutes>
              }
            />
            <Route
              path="/starships/:nameParam/films"
              element={
                <PrivateRoutes>
                  <FilmsPage starships={starships} />
                </PrivateRoutes>
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
