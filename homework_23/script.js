fetch("https://reqres.in/api/users?per_page=12")
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    const usersData = responseData.data;

    console.log("-----------");
    console.log("Пункт №1:");
    usersData.forEach((user) => console.log(user));

    console.log("-----------");
    console.log("Пункт №2:");
    usersData.forEach((user) => {
      console.log(user.last_name);
    });

    console.log("-----------");
    console.log("Пункт №3:");
    usersData
      .filter((user) => user.last_name[0] === "F")
      .forEach((user) => console.log(user));

    console.log("-----------");
    console.log("Пункт №4:");
    const lastUser = usersData[usersData.length - 1];
    const allUsersString = usersData.reduce((acc, user) => {
      if (user.id === lastUser.id) {
        return acc + ` ${user.first_name} ${user.last_name}.`;
      }
      return acc + ` ${user.first_name} ${user.last_name},`;
    }, "Наша база содержит данные следующих пользователей:");
    console.log(allUsersString);

    console.log("-----------");
    console.log("Пункт №5:");
    const allKeysArray = Object.keys(usersData[0]);
    const allKeys = allKeysArray.forEach((key) => console.log(key));
  })
  .catch((e) => console.log(e));
