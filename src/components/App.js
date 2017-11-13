import React from 'react';
import Typography from 'material-ui/Typography';
import base from '../base';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      cncProducts: [],
      loading: true,
    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.tick(), 1000);
    base.syncState('cncProducts', {
      context: this,
      state: 'cncProducts',
      asArray: true,
      then() {
        this.setState({ loading: false });
      },
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }));
  }

  render() {
    const listItems = this.state.cncProducts.map(element => <li>{element.partName}</li>);
    return (
      <Typography type="subheading" gutterBottom>
        {this.state.loading === true ? <h3> LOADING... </h3> : <ul>{listItems}</ul>}
      </Typography>
    );
  }
}

export default App;

// Seconds: {this.state.seconds}
