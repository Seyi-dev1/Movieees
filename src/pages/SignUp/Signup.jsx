import "./signup.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { signUpStart } from "../../redux/user/userReducer";
import {
  selectCurrentUser,
  selectIsLoading,
  selectError,
} from "../../redux/user/userSelector";
import { Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
const Signup = () => {
  const [details, setDetails] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value,
    });
    console.log(details);
  };
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser,
  );
  const isLoadingSelector = createSelector(
    [selectIsLoading],
    (isLoading) => isLoading,
  );
  const isLoading = useSelector((state) => isLoadingSelector(state));

  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const user = useSelector((state) => userSelector(state));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpStart(details));
  };

  React.useEffect(() => {
    user && setTimeout(() => navigate("/"), 2000);
  }, [user, navigate]);

  return (
    <div className="signup_container">
      <div className="title_con">
        <MdLocalMovies className="icon" />
        <div className="title">
          <span>BLOCK</span>
          <span>BUSTER</span>
          <h1>Films catalogue</h1>
        </div>
      </div>
      <div className="inputContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="enter email"
            className="formInput"
            id="email"
            value={details.email}
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="username">username</label>
          <input
            type="username"
            required
            placeholder="choose username"
            className="formInput"
            id="username"
            value={details.username}
            onChange={handleChange}
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            placeholder="enter password"
            className="formInput"
            id="password"
            value={details.password}
            onChange={handleChange}
            name="password"
          />
          <div className="buttonContainer">
            <button type="submit">Sign up</button>
          </div>
        </form>
        {error && <h1 className="error">{error.message}</h1>}
        <Link to="/login" className="login_here">
          Go back to login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
