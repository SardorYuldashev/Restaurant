let userLS = JSON.parse(localStorage.getItem("users"));
if (userLS === null) {
  let usersProfil = [];
  localStorage.setItem("users", JSON.stringify(usersProfil));
}



userLS = JSON.parse(localStorage.getItem("users"));

let fName = '';
localStorage.setItem("fName", fName)

// *Autorization====================================================
const autoLogin = document.querySelector(".autoInput-login");
const autoPassword = document.querySelector(".autoInput-password");
const autoBtn = document.querySelector(".autoBtn");

autoBtn.addEventListener("click", (e) => {
  let autoLoginValue = autoLogin.value;
  let autoPasswordValue = autoPassword.value;
  let num = 0;

  if (autoLoginValue === '' || autoPasswordValue=== '') {
    num = 6
  };
  
  userLS.forEach(user => {
    if (user.login === autoLoginValue && user.password === autoPasswordValue) {
      num = 1;
      fName = user.userName;
      localStorage.setItem('fName', fName);
    }  else if (user.login === autoLoginValue && user.password !== autoPasswordValue) {
      num = 3;
    } else if (user === {}) {
      num = 5      
    };
  });


  if (num === 1) {
    location.href = '../index.html';
  }  else if (num === 3) {
    alert('Parol xato kiritilgan');
  }  else if (num = 5) {
    alert('Bunday login mavjud emas');
  } else if (num === 6) {
    alert('inputlar toldirilmagan');
  };
  num = 0;
  autoLogin.value = '';
  autoPassword.value = '';
});