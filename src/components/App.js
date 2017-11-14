import React from 'react';
import Typography from 'material-ui/Typography';
import * as firebase from 'firebase';

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
      cncProducts: [],
      loading: true,
    };
  }

  componentDidMount() {
    const db = firebase.database();
    const cncRef = db.ref().child('cncProducts');
    console.log('snap z bazy ', cncRef);
    cncRef.on(
      'value',
      (snapshot) => {
        console.log(snapshot.val());
        this.setState({
          cncProducts: Object.values(snapshot.val()),
          loading: false,
        });
      },
      (errorObject) => {
        console.log(`The read failed: ${errorObject.code}`);
      },
    );
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
