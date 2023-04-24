import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Settings from "./pages/Settings/Settings";
import History from "./pages/History/History";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const navigate = useNavigate();
  const user = useSelector((state) => userSelector(state));
  const RequireAuth = ({ children }) => {
    return user ? children : navigate("/login");
  };
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="history"
            element={
              <RequireAuth>
                <History />
              </RequireAuth>
            }
          />
          <Route
            path="watchlist"
            element={
              <RequireAuth>
                <Watchlist />
              </RequireAuth>
            }
          />
          <Route path="movies">
            <Route index element={<AllMovies />} />
            <Route
              path="/movies/:movieId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route path="/movies/section/:sectionId" element={<Movies />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
