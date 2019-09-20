import React from "react";
import Users from "../users/users.component";
import "./users-list.styles.css";

class UserList extends React.Component {
  render() {
    return (
      <div className="cardlist">
        {this.props.users.map(user => (
          <Users key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    );
  }
}

export default UserList;
