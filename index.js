const username ="Beshwanth Sai Katari";
 const WelcomeMsg= document.getElementById("welcome-msg");
  WelcomeMsg.textContent+=username === "" ? 'Guest' : username;