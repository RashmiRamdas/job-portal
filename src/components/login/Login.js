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
import { useHistory } from "react-router-dom";
import { useGlobalContext, ACTIONS, FIELDS } from "../context/useGlobalContext";

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
  const history = useHistory();
  const [state, dispatch] = useGlobalContext();

  const signIn = () => {
    if (state.user[FIELDS.USERNAME] && state.user[FIELDS.PASSWORD]) {
      dispatch({
        type: ACTIONS.LOGIN_STATUS,
        value: true,
      });

      if (state.user[FIELDS.USERTYPE] === "employee") {
        history.push("/employeeProfile");
      } else {
        history.push("/employerProfile");
      }
    } else {
      dispatch({
        type: ACTIONS.LOGIN_STATUS,
        value: false,
      });
    }
  };

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
            value={state.user[FIELDS.USERNAME]}
            onChange={(ev) =>
              dispatch({
                type: ACTIONS.CHANGE_VALUE,
                value: ev.target.value,
                field: FIELDS.USERNAME,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
            value={state.user[FIELDS.PASSWORD]}
            onChange={(ev) =>
              dispatch({
                type: ACTIONS.CHANGE_VALUE,
                value: ev.target.value,
                field: FIELDS.PASSWORD,
              })
            }
          />

          <RadioGroup
            value={state.user.userType}
            name="userType"
            onChange={(ev) =>
              dispatch({
                type: ACTIONS.CHANGE_VALUE,
                value: ev.target.value,
                field: FIELDS.USERTYPE,
              })
            }
          >
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
          {!state.user[FIELDS.IS_SIGN_IN_SUCCESS] ? (
            <span class="login-error-msg">Please Enter Valid Credentials</span>
          ) : (
            ""
          )}
          <Button
            className="form-sign-in"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signIn}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
