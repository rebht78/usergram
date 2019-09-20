import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./components/users-list/users-list.component";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchText: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userdata => this.setState({ users: userdata }));
  }
  render() {
    const usersData = this.state.users;
    const search = this.state.searchText;
    const filteredUsers = usersData.filter(user => user.name.includes(search));
    return (
      <div>
        <h1>Usergram</h1>
        <p>An application that think about User first</p>
        <div className="searchbox">
          <input
            type="text"
            placeholder="Enter your Search Value"
            onChange={this.handleChange}
          />
        </div>
        <UsersList users={filteredUsers} />
      </div>
    );
  }
  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
