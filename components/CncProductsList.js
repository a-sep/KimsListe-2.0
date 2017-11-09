import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import base from './base';

const styles = {
  root: {
    textAlign: 'center',
    // paddingTop: 200,
  },
};

class CncProductsList extends Component {
  constructor() {
    super();
    this.state = {
      cncProducts: [],
      firebaseCncProductsSynced: false,
    };
  }

  componentDidMount = () => {
    base.syncState(`cncProducts`, {
      context: this, // what object the state is on
      state: 'cncProducts', // which property to sync
      asArray: true,
      then: () => this.setState({ firebaseCncProductsSynced: true }),
    });
  };

  addItem = newItem => {
    this.setState({
      cncProducts: this.state.cncProducts.concat([newItem]), // updates Firebase and the local state
    });
  };

  render() {
    const cncProducts = this.state.cncProducts;
    const listItems = cncProducts.map(part => <li>{part.partName}</li>);

    return <ul>{listItems}</ul>;
  }
}

CncProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(CncProductsList));
