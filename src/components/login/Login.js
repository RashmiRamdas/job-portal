import React from "react";
import "./Login.css";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Avatar,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { pink } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    alignItems: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className="login">
      <div className="login-form">
        <div className="form-header">
          <Avatar className={`login-form-icon-color ${classes.pink}`}>
            <LockIcon />
          </Avatar>
          <h1 className="form-name">Sign In</h1>
        </div>
        <form>
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <RadioGroup name="type">
            <FormControlLabel
              value="employer"
              control={<Radio />}
              label="Employer"
            />
            <FormControlLabel
              value="employee"
              control={<Radio />}
              label="Employee"
            />
          </RadioGroup>
          <Button
            className="form-sign-in"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
