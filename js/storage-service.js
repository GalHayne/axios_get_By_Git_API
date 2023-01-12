function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem("users"));
}
