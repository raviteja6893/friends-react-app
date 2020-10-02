import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {friend: '', friends: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({friend: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.friend);
    this.setState(prevState => ({
      friends: [...prevState.friends, this.state.friend]
    }))
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My First React App
          </h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter name of friend : 
              <input type="text" value={this.state.friend} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>
          <h2>
            My Friends
          </h2>
          <ul>
            {this.state.friends.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
