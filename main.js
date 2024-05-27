"use strict";
{
  function showHeader() {
    console.log("showHeader");
  }
  async function showUsers() {
    try {
      const response = await fetch(
        "https://dotinstall.github.io/setup/fetchapi/invalid-users.json"
      );
      const users = await response.json();
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  }
  function showFooter() {
    console.log("showFooter");
  }

  showHeader();
  showUsers();
  showFooter();
}
