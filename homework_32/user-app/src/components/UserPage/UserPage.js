import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch");
        }
        return response.json();
      })
      .then((responseData) => {
        setUser(responseData.data);
      })
      .catch((e) => alert(e));
  }, [userId]);

  return (
    <h1>
      {!user && <p>Loading...</p>}
      {user && `${user['first_name']} ${user['last_name']}`}
    </h1>
  );
};

export default UserPage;
