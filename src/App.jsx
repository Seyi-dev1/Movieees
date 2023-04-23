import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Login from "./pages/login/Login";
import Signup from "./pages/SignUp/Signup";
import Account from "./pages/Account/Account";
import "./app.scss";
import AllMovies from "./pages/Allmovies/AllMovies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesStart } from "./redux/moviesdata/moviesdataReducer";
import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/Watchlist/Watchlist";
import Settings from "./pages/settings/Settings";
import History from "./pages/History/History";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account">
            <Route index element={<Account />} />
            <Route path="/account/settings" element={<Settings />} />
            <Route path="/account/history" element={<History />} />
            <Route path="/account/watchlist" element={<Watchlist />} />
          </Route>
          <Route path="movies">
            <Route index element={<AllMovies />} />
            <Route path="/movies/:movieId" element={<Single />} />
            <Route path="/movies/section/:sectionId" element={<Movies />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
