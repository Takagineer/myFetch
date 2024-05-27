"use strict";
{
  function showHeader() {
    console.log("showHeader");
  }
  async function showUsers() {
    const response = await fetch(
      "https://dotinstall.github.io/setup/fetchapi/users.json"
    );
    const users = await response.json();
    console.log(users);
  }
  function showFooter() {
    console.log("showFooter");
  }

  showHeader();
  showUsers();
  showFooter();
}
