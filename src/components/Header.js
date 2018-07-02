import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Background from '../images/beach.jpeg'
import logo from '../images/logo-white.png'

const styles = {
  root: {
    flexGrow: 1,
    height: 300,
    backgroundImage: `url(${Background})`
  },
  toolBar: {
    opacity: '0%'
  }

};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img style= {{ height: 100}} src = {logo}/>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);