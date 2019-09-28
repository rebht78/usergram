import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./components/users-list/users-list.component";
import SearchBox from "./components/searchbox/searchbox.component";
import "./styles.css";

class App extends React.Component {
  state = {
    users: [],
    searchText: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userdata => this.setState({ users: userdata }));
  }
  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };
  render() {
    const usersData = this.state.users;
    const search = this.state.searchText;
    const filteredUsers = usersData.filter(user => user.name.includes(search));
    return (
      <div className="approot">
        <h1>Usergram</h1>
        <p>An application that think about User first</p>
        <div className="searchbox">
          <SearchBox handleChange={this.handleChange} />
        </div>
        <UsersList users={filteredUsers} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
