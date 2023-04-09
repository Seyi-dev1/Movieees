import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Login from "./pages/login/Login";
import Signup from "./pages/SignUp/Signup";
import Account from "./pages/Account/Account";
// import { useEffect } from "react";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="My_Account" element={<Account />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path="/movies/:movieId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
