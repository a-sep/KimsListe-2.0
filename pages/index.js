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
import base from '../components/base';

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
      cncProducts: [],
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

  componentDidMount = () => {
    base.syncState(`cncProducts`, {
      context: this, // what object the state is on
      state: 'cncProducts', // which property to sync
      asArray: true,
    });
  };
  addItem = newItem => {
    this.setState({
      cncProducts: this.state.cncProducts.concat([newItem]), //updates Firebase and the local state
    });
  };

  render() {
    const cncProducts = this.state.cncProducts;
    const listItems = cncProducts.map(part => <li>{part.partName}</li>);

    return (
      <div className={this.props.classes.root}>
        <ButtonAppBar />
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
        <ul>{listItems}</ul>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
