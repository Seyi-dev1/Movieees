import "./login.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../redux/user/userReducer";
import {
  selectCurrentUser,
  selectIsLoading,
  selectError,
} from "../../redux/user/userSelector";
import { createSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
const Login = () => {
  const [details, setDetails] = useState({
    email: "",
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
  const user = useSelector((state) => userSelector(state));
  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(details));
    } catch (err) {
      navigate("/");
    }
  };

  React.useEffect(() => {
    user && setTimeout(() => navigate("/"), 2000);
  }, [user, navigate]);

  return (
    <div className="login_container">
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
            <button type="submit">Login</button>
          </div>
        </form>
        {error && <h1 className="error">{error.message}</h1>}
        <Link to="/signup" className="signup_here">
          create an Account here
        </Link>
      </div>
    </div>
  );
};

export default Login;
