import React from "react";
import { Typography, Link, makeStyles, Box } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#f5f5f5",
    padding: "1rem"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" color="textSecondary" align="center">
        <Box display="flex" alignContent="center" justifyContent="center">
          {"Single source of truth "}
        </Box>
      </Typography>
    </footer>
  );
};

export default Footer;
