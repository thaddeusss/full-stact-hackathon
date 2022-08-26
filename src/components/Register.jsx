import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/Auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function RegistrationPage() {
  const { register, error, setError } = useAuth();

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    register(formData);
  }
  const navigate = useNavigate();

  console.log(email, password, passwordConfirm);
  React.useEffect(() => {
    setError(false);
  }, []);

  const [changeColorProfile, setChangeColorProfile] = React.useState("#adadad");
  const [changeColorUsername, setChangeColorUsername] =
    React.useState("#adadad");
  const [changeColorConfirm, setChangeColorConfirm] = React.useState("#adadad");

  const [changeColorLock, setChangeColorLock] = React.useState("#adadad");

  return (
    <div className="auth-main">
      <div className="auth-block">
        <h3 className="auth-header">Sign Up</h3>
        <div className="auth__input-block">
          <p>Email</p>
          <div className="auth-input__form">
            <label htmlFor="email">
              <PersonOutlineIcon
                id="usernameInp"
                className="auth-input__icon"
                sx={{ color: changeColorProfile, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Adress Email"
              className="auth-input"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setChangeColorProfile("#6F73EE")}
              onBlur={() => setChangeColorProfile("#adadad")}
            />
          </div>
          <div className="auth__input-block">
            <p>Username</p>
            <div className="auth-input__form">
              <label htmlFor="username">
                <PersonOutlineIcon
                  id="usernameInp"
                  className="auth-input__icon"
                  sx={{ color: changeColorUsername, transition: "all 100ms" }}
                />
              </label>
              <input
                placeholder="Username"
                className="auth-input"
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setChangeColorUsername("#6F73EE")}
                onBlur={() => setChangeColorUsername("#adadad")}
              />
            </div>
          </div>
        </div>
        <div className="auth__input-block">
          <p>Password</p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon
                id="userpasswordInp"
                className="auth-input__icon"
                sx={{ color: changeColorLock, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Type password"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setChangeColorLock("#6F73EE")}
              onBlur={() => setChangeColorLock("#adadad")}
            />
          </div>
        </div>
        <div className="auth__input-block">
          <p>Password</p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon
                id="userpasswordInp"
                className="auth-input__icon"
                sx={{ color: changeColorConfirm, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Password "
              name="password_confirm"
              label="Password"
              type="password_confirm"
              id="password_confirm"
              autoComplete="current-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              onFocus={() => setChangeColorConfirm("#6F73EE")}
              onBlur={() => setChangeColorConfirm("#adadad")}
            />
          </div>
        </div>
        {error ? (
          <Typography sx={{ color: "red", m: 1 }}>{error}</Typography>
        ) : null}
        <button
          className="auth-btn"
          // onClick={() => handleLogin(email, password)}
          onClick={handleSave}

        >
          Sign Up
        </button>
        <div className="auth-another">
          <p className="auth-another__hint">Or Sign In</p>
          <button onClick={() => navigate("/login")} className="auth-link">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
