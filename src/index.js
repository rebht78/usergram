import React from "react";
import ReactDOM from "react-dom";
import SearchBox from "./components/searchbox/searchbox.component";
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
      <div className="approot">
        <h1>Usergram</h1>
        <p>An application that think about User first</p>
        <div className="searchbox">
          <SearchBox />
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
