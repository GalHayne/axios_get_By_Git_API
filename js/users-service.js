const url = "https://api.github.com/users";

const users = loadFromStorage();

function onInit() {
  getPrmUsers().then((users) => renderUsers(users));
}

function getPrmUsers() {
  if (!users) {
    return axios.get(url).then((res) => {
      const prmUsers = res.data.map((user) => {
        return createNewUser(user);
      });
      return Promise.all(prmUsers).then((usersToRender) => {
        saveUsers(usersToRender);
        return usersToRender;
      });
    });
  } else {
    return Promise.resolve(users);
  }
}

function createNewUser(user) {
  return axios.get(user.repos_url).then((res) => {
    return {
      userName: user.login,
      userId: user.id,
      userAvatar: user.avatar_url,
      userReposNum: res.data.length,
    };
  });
}
