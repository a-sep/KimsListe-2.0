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

import App from '../components/App';
import ButtonAppBar from '../components/ButtonAppBar';
import SignIn from '../components/SignIn';
import * as firebase from 'firebase';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      uid: null,
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
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        this.setState({ uid: result.user.uid });
      })
      .catch(err => console.error(err));
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        // Sign-out successful.
        () => this.setState({ uid: null }),
      )
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <ButtonAppBar
          signedIn={this.signedIn}
          handleAuth={this.handleAuth}
          signOut={this.signOut}
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

        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
        {this.signedIn() ? (
          <App />
        ) : (
          <Typography type="subheading" gutterBottom>
            You have to be signed in...
            <Button raised color="accent" onClick={this.handleAuth}>
              Sign In
            </Button>
          </Typography>
        )}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
