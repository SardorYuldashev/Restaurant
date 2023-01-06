// *Local Storage====================================================
let userLS = JSON.parse(localStorage.getItem("users"));
if (userLS === null) {
  let usersProfil = [];
  localStorage.setItem("users", JSON.stringify(usersProfil));
}

setInterval(() => {
  userLS = JSON.parse(localStorage.getItem("users"));
}, 1);

let fName = '';
localStorage.setItem("fName", fName);

// *Registration====================================================
const regName = document.querySelector(".regInput-name");
const regLogin = document.querySelector(".regInput-login");
const regPassword = document.querySelector(".regInput-password");
const regBtn = document.querySelector(".regBtn");

regBtn.addEventListener("click", () => {
  let regNameValue = regName.value;
  let regLoginValue = regLogin.value;
  let regPasswordValue = regPassword.value;
  let num = 0;

  if (regLoginValue === "" || regPasswordValue === "") {
    num = 3;
  };

  userLS.forEach((user) => {
    if (user.login === regLoginValue) {
      num = 1;
    };
  });

  if (regLoginValue && regPasswordValue && num !== 1) {
    num = 2;
  };

  if (regNameValue === "") {
    alert("Ismingizni kiriting");
  } else {
    if (num === 1) {
      alert("Login band");
    } else if (num === 2) {
      userLS.push({ login: regLoginValue, password: regPasswordValue, userName: regNameValue});
      localStorage.setItem("users", JSON.stringify(userLS));
      location.href = "../index.html";
      fName = regNameValue;
      localStorage.setItem('fName', fName);
    } else if (num === 3) {
      alert("Inputlar toldirilmagan");
    }
  };

  num = 0;
  
  regNameValue.value = '';
  regLoginValue.value = '';
  regPasswordValue.value = '';
});
