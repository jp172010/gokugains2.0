import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GokuTraining from "./Images/goku-training.jpg";
import ReactPlayer from "react-player";
import "./css/Home.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  nav: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  title: {
    flexGrow: 1
  },
  topContent: {
    backgroundColor: '#facc48'
  },
  mainContent: {
    backgroundImage: `url(${GokuTraining})`
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="mainDivHome">
      <Grid container spacing={2} className={classes.topContent}>
        <Grid item xs={12}>
          <div className={classes.nav}>
            <AppBar position="static" id="navbar">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <a href="./" id="homeTitle">
                    Goku Gainz
                  </a>
                </Typography>
                <Button color="inherit" id="homeLogin" href="./Login">
                  Login
                </Button>
                or
                <Button color="inherit" id="homeSignUp" href="./createAccount">
                  Sign Up
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
        <Grid item xs={12} id="player">
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IoMZkdVmIpg"
              playing
              width={720}
              height={400}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={8} className={classes.mainContent}>
        <Grid item xs={12} id="intro">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div id="description">
            Goku Gainz is an easy to use, full functioning, exercise platform
            meant to be used by or in conjunction with a Personal Trainer, but
            is essential for anyone looking to build muscle or lose weight.
            <br />
            <a href="./createAccount">
              <button class="buttonHome">Create New Account</button>
            </a>
            <br />
            <br />
            GG has a complete exercise library with over 300+ movements that
            allows you to easily design and implement training programs.
            <br />
            <a href="#">
              <button class="buttonHome">Design A Workout</button>
            </a>
            <br />
            <br />
            GG allows you to set personal short term / long term goals and helps
            you keep track of your measurments/weights, to ensure you are
            training efficiently and effectively.
            <br />
            <a href="#">
              <button class="buttonHome">Set Your Goals</button>
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.nav}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <Typography variant="h6" className={classes.title} id="homeCR">
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
