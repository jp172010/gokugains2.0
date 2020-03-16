import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./css/Login.css";
import GokuTraining from "./Images/goku-training.jpg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${GokuTraining})`,
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="mainDivHome">
      <Grid container spacing={8}>
      <Grid item xs={12}>
          <div className={classes.nav}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <a href="./">
                    Goku Gainz
                  </a>
                </Typography>
                <Button color="inherit" href="./Login">
                  Login
                </Button>
                or
                <Button color="inherit" href="./createAccount">
                  Sign Up
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
        <Grid item xs={12} id="titleHome">
          Goku Gainz!
        </Grid>
        <Grid item xs={12} id="createAccount">
          <a href="./createAccount">
            <button id="createAccountButtonHome">Create New Account</button>
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={8} id="loginArea">
        <Grid item xs={6}>
          Member Login
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="memberEmail"
              label="Email"
              placeholder="Email"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="memberPassword"
              label="Password"
              placeholder="Password"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          Guest Login
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="guestEmail"
              label="Email"
              placeholder="Email"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="guestPassword"
              label="Password"
              placeholder="Password"
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <button className="signInButtons" onClick="">
            Sign In
          </button>
        </Grid>
        <Grid item xs={6}>
          <button className="signInButtons" onClick="">
            Sign In
          </button>
        </Grid>
        <Grid item xs={12} id="intro">
          Goku Gainz is an easy to use, full functioning exercise platform.
          <br />
          <br />
          GG is meant to be used in conjunction with a Personal Trainer, but is
          essential for anyone looking to build muscle or lose weight.
          <br />
          <br />
          GG has a complete exercise library with over 300+ movements.
          <br />
          <br />
          GG allows you to program weeks in advance to set personal goals for
          each week/day.
          <br />
          <br />
          GG keeps track of your progress, to insure you are training
          effectively.
        </Grid>
        <Grid item xs={12}>
          <a href="./createAccount">
            <button id="bottomCreateAccountButton">Create New Account</button>
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.nav}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title} id="CRCA">
                  <a href="#" className="appBarLink">
                    {" "}
                    ©{" "}
                  </a>
                  2019
                  <a href="./Home" className="appBarLink">
                    {" "}
                    GokuGains
                  </a>
                </Typography>
                <Typography variant="h6">
                  <a href="#" className="appBarLink">
                    PrivacyPolicy
                  </a>
                  <a href="#" className="appBarLink">
                    {" "}
                    Contact
                  </a>
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
