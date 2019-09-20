import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./components/users-list/users-list.component";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userdata => this.setState({ users: userdata }));
  }
  render() {
    var usersData = this.state.users;
    return (
      <div>
        <h1>Usergram</h1>
        <p>An application that think about User first</p>
        <UsersList users={usersData} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
