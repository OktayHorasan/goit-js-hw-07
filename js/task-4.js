console.log("%cTask-4", "color: #12ff00; font-weight: bold;");

const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (userEmail.length > 0 && password.length > 0) {
    const userInfo = {
      email: userEmail.trim(),
      password: password.trim(),
    };
    console.table(userInfo);
    document.querySelector(".login-form").reset();
  } else {
    alert("All form fields must be filled in");
  }
});