import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }


  render() {
    if (this.state.loading) {
      return <div>...loading</div>
    }
    return (
      <div>Hello </div>
    )

  }
  componentDidMount() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState(
          { loading: false }
        )
      }, 5000)
    }
  }
  }


export default App;
