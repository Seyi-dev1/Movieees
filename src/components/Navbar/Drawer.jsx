import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdSettings } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import {
  FaBars,
  FaBriefcase,
  FaHistory,
  FaPlay,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  selectNowPlayingMovies,
  selectOutInCinemaMovies,
  selectPopularMovies,
  selectTopRatedMovies,
} from "../../redux/moviesdata/moviesdataSelector";
import { createSelector } from "@reduxjs/toolkit";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillBarChartLineFill,
  BsFillCameraFill,
  BsFillCameraReelsFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { AiFillFire, AiOutlineLogin } from "react-icons/ai";
import { grey } from "@mui/material/colors";
import { startSignOut } from "../../redux/user/userReducer";
export default function TemporaryDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();
  const popularMoviesSelector = createSelector(
    [selectPopularMovies],
    (popularMovies) => popularMovies,
  );
  const topRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    (topRatedMovies) => topRatedMovies,
  );
  const inCinemaMoviesSelector = createSelector(
    [selectOutInCinemaMovies],
    (upComingMovies) => upComingMovies,
  );
  const nowPlayingMoviesSelector = createSelector(
    [selectNowPlayingMovies],
    (nowPlaying) => nowPlaying,
  );
  const popularMovies = useSelector((state) => popularMoviesSelector(state));
  const topRatedMovies = useSelector((state) => topRatedMoviesSelector(state));
  const upComingMovies = useSelector((state) => inCinemaMoviesSelector(state));
  const nowPlayingMovies = useSelector((state) =>
    nowPlayingMoviesSelector(state),
  );
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => userSelector(state));
  //   const { username } = user;
  const list = (anchor) => (
    <Box
      sx={{
        color: "white",
        background: grey[900],
        width: anchor === "top" || anchor === "bottom" ? "auto" : 220,
        height: "120%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem key="15">
        <ListItemText primary="Blockbuster v1.0" />
      </ListItem>
      <Divider />

      {user ? (
        <ListItem>
          <ListItemIcon
            sx={{
              color: "white",
            }}
          >
            <FaUserCircle />
          </ListItemIcon>
          <ListItemText primary={user.username || "buster11001"} />
        </ListItem>
      ) : (
        <ListItem>
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <AiOutlineLogin />
            </ListItemIcon>
            <ListItemText
              primary="Sign In"
              onClick={() => {
                navigate("/login");
              }}
            />
          </ListItemButton>
        </ListItem>
      )}
      <Divider />
      <List>
        <ListItem key="5">
          <ListItemText
            primary="Categories"
            style={{ color: "rgba(255, 255, 255, 0.501)" }}
          />
          <ListItemIcon
            sx={{
              color: "white",
            }}
          >
            <ImBooks style={{ color: "#ff00516e" }} />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem key="0" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/movies/section/popular", {
                state: { data: popularMovies, sectiontitle: "Popular movies" },
              });
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <AiFillFire style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="Popular" />
          </ListItemButton>
        </ListItem>
        <ListItem key="1" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/movies/section/now playing", {
                state: {
                  data: nowPlayingMovies,
                  sectiontitle: "Now Playing",
                },
              });
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <FaPlay style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="Now playing" />
          </ListItemButton>
        </ListItem>
        <ListItem key="2" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/movies/section/Coming soon to cinemas", {
                state: {
                  data: upComingMovies,
                  sectiontitle: "Coming soon to cinemas",
                },
              });
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <BsFillCameraReelsFill style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="#ComingSoon" />
          </ListItemButton>
        </ListItem>
        <ListItem key="3" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/movies/section/Top Rated", {
                state: { data: topRatedMovies, sectiontitle: "Top-rated" },
              });
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <BsFillBarChartLineFill style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="Top rated" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <ListItem key="6">
        <ListItemText
          primary="My Account"
          style={{ color: "rgba(255, 255, 255, 0.501)" }}
        />
        <ListItemIcon
          sx={{
            color: "white",
          }}
        >
          <FaBriefcase style={{ color: "#ff00516e" }} />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <List>
        <ListItem key="9" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/watchlist");
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <BsFillHeartFill style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="watchlist" />
          </ListItemButton>
        </ListItem>
        <ListItem key="10" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/history");
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <FaHistory style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="history" />
          </ListItemButton>
        </ListItem>
        <ListItem key="11" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <MdSettings style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText primary="settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

      {user && (
        <ListItem>
          <ListItemButton>
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              <FaSignOutAlt style={{ color: "#ff0051" }} />
            </ListItemIcon>
            <ListItemText
              primary="Sign out"
              onClick={() => {
                dispatch(startSignOut());
              }}
            />
          </ListItemButton>
        </ListItem>
      )}
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>
          <FaBars style={{ color: "#fff", fontSize: "30px" }} />
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
