function renderUsers(users) {
  const elImg_container = document.querySelector(".img_container");

  let strHTML = "";

  users.forEach((user) => {
    strHTML += `<section class="user-card">
            <h1 class="userName">User Name:<span>${user.userName}</span></h1>
            <img class="userAvatar" src="${user.userAvatar}" alt="">
            <h3 class="userRepos">Repos Count:<span>${user.userReposNum}</span></h3>
        </section>`;
  });

  elImg_container.innerHTML = strHTML;
}
