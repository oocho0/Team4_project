window.addEventListener("load", function() {
  var tabs = document.getElementById("tabs"),
      tab = document.getElementsByClassName("tab"),
      tabContent = document.getElementsByClassName("tabContent"),
      input = document.getElementsByClassName("form__input"),
      active = "tab__active",
      form = document["signUp"],
      formEl = document["signUp"].elements,
      formLogIn = document["logIn"],
      dataInLocal = window.localStorage;

//   formLogIn.addEventListener("submit", function(e) {
//     if (dataInLocal.getItem("email") == formLogIn["email"].value &&
//        dataInLocal.getItem("pass") == formLogIn["pass"].value) {
//        alert("로그인 성공!");
//     } else {
//       e.preventDefault();
//       alert("이메일 또는 비밀번호가 올바르지 않습니다.");
//     }
//   }, false);

//   form.addEventListener("submit", function(e) {
//     if (e.target) {
//       for (var i = 0, len = form.length; i < len; i++) {
//         dataInLocal.setItem(form[i].name, form[i].value);
//       }
//     }
//   }, false);

  for (var i = 0, len = input.length; i < len; i++) {
    input[i].addEventListener("focus", function(e) {
      var label = e.target.nextElementSibling;
      if (e.target.value == "") {
        label.style.display = "none";
      }
    }, false);
    input[i].addEventListener("red", function(e) {
      var label = e.target.nextElementSibling;
      if (e.target.value == "") {
        label.style.display = "block";
      } else {
        label.style.display = "none";
      }
    }, false);
  }

  tabs.addEventListener("click", function(e) {
    for (var i = 0, a = tabContent.length; i < a; i++) {
      tab[i].classList.remove(active);

      if (e.target.className == "tab") {
        if (e.target.className != active) {
          for (var j = 0; j < a; j++) {
            tabContent[j].classList.remove("show");
          }
          e.target.classList.add(active);
          tabContent[i].classList.add("show");
        }
      }
    }
  }, false);
});
