import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {friend: '', friends: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8080/friends')
      .then(response => {
        this.setState({ friends: response.data.map(item => item.name) });
      });
  }

  handleChange(event) {
    this.setState({friend: event.target.value});
  }

  handleSubmit(event) {
    this.setState(prevState => ({
      friends: [...prevState.friends, this.state.friend]
    }))
    event.preventDefault();
    axios.post('http://localhost:8080/friends', {"name": this.state.friend})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
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
