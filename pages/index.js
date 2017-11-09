/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

import ButtonAppBar from '../components/ButtonAppBar';
import CncProductsList from '../components/CncProductsList';
import SignIn from '../components/SignIn';

const styles = {
  root: {
    textAlign: 'center',
    // paddingTop: 200,
  },
};

class Index extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      uid: true,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  signedIn = () => {
    return this.state.uid;
  };

  handleAuth = () => {
    this.setState({ uid: 'dstrus' });
  };

  signOut = () => {
    this.setState({ uid: null });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <ButtonAppBar
          handleAuth={this.handleAuth}
          signOut={this.signOut}
          signedIn={this.signedIn()}
        />
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
        {this.signedIn() ? <CncProductsList /> : <SignIn handleAuth={this.handleAuth} />}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
