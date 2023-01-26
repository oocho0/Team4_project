// 휴대폰 번호 입력 부분

function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value // 010
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value // 010
    if(phone3.length === 4){
      document.getElementById("sendMessage").focus();
      document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
      document.getElementById("sendMessage").disabled = false;
    }
}

// $('#dog0').on('click', function(e){
//   var dog_name = $('#dog0-name').text();
//   console.log(dog_name);
//   window.localStorage.setItem("dog_name", dog_name)
//
//   window.localStorage.setItem("user_id", "Chelsea")
//   window.location.href='file:///C:/cordova/projectrunnote/www/login.html';
// });
//
// $('#dog3').on('click', function(e){
//   var dog_name = $('#dog3-name').text();
//   console.log(dog_name);
//   window.localStorage.setItem("dog_name", dog_name)
//
//   window.localStorage.setItem("user_id", "Chelsea")
//   window.location.href='file:///C:/cordova/projectrunnote/www/login.html';
// });

var auth = firebase.auth();
var user = null;

function signup(form) {
    var phonenumber = form.phonenumber.value;
    var password = form.password.value;

    auth
        .createUserWithEmailAndPassword(phonenumber, password)
        .then(function() {
            alert('회원가입 성공!');
        })
        .catch(function(error) {
            alert(error.message);
        })
}

function signin(form) {
    var phonenumber = form.phonenumber.value;
    var password = form.password.value;

    auth
        .signInWithEmailAndPassword(phonenumber, password)
        .then(function() {
            alert('로그인 성공!');
        })
        .catch(function(error) {
            alert(error.message);
        })
}

// <script>
//     window.onload = function() {
//
//         if (getCookie("id")) { // getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
//             document.loginForm.userid.value = getCookie("id"); //input 이름이 id인곳에 getCookie("id")값을 넣어줌
//             document.loginForm.idsave.checked = true; // 체크는 체크됨으로
//         }
//
//     }
//
//     function setCookie(name, value, expiredays) //쿠키 저장함수
//     {
//         var todayDate = new Date();
//         todayDate.setDate(todayDate.getDate() + expiredays);
//         document.cookie = name + "=" + escape(value) + "; path=/; expires="
//                 + todayDate.toGMTString() + ";"
//     }
//
//     function getCookie(Name) { // 쿠키 불러오는 함수
//         var search = Name + "=";
//         if (document.cookie.length > 0) { // if there are any cookies
//             offset = document.cookie.indexOf(search);
//             if (offset != -1) { // if cookie exists
//                 offset += search.length; // set index of beginning of value
//                 end = document.cookie.indexOf(";", offset); // set index of end of cookie value
//                 if (end == -1)
//                     end = document.cookie.length;
//                 return unescape(document.cookie.substring(offset, end));
//             }
//         }
//     }
//
//         if (document.loginForm.idsave.checked == true) { // 아이디 저장을 체크 하였을때
//             setCookie("id", document.loginForm.userid.value, 7); //쿠키이름을 id로 아이디입력필드값을 7일동안 저장
//         } else { // 아이디 저장을 체크 하지 않았을때
//             setCookie("id", document.loginForm.userid.value, 0); //날짜를 0으로 저장하여 쿠키삭제
//         }
//
//         document.loginForm.submit(); //유효성 검사가 통과되면 서버로 전송.
//
//     }
// </script>


setTimeout(function() {
      alert("가입이 완료되었습니다.")
  },0);
  }
}
