import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch");
        }
        return response.json();
      })
      .then((responseData) => {
        setUsers(responseData.data);
      })
      .catch((e) => alert(e));
  }, []);

  let usersData;
  if (!users) {
    usersData = <p>Loading...</p>;
  }
  if (users) {
    usersData = users.map((user) => {
      return (
        <li key={user.id}>
          <Link
            to={`${user.id}`}
          >{`${user['first_name']} ${user['last_name']}`}</Link>
        </li>
      );
    });
  }

  return (
    <Fragment>
      <h1>All Users</h1>
      <ul>{usersData}</ul>
    </Fragment>
  );
};

export default UsersPage;
