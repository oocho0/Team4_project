// 프로필 사진 효과

var loadFile = function (event) {
  var image = document.getElementById("image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

// localStorage 입력 정보들 저장

// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   window.localStorage.setItem("name", "chelsea")
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var name = "chelsea";
//   window.localStorage.setItem("name", name)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var registrationnumber = "10";
//   window.localStorage.setItem("registrationnumber", registrationnumber)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var birthdaydate = "2023-01-26";
//   window.localStorage.setItem("birthdaydate", birthdaydate)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var weight = "55Kg";
//   window.localStorage.setItem("weight", weight)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var breeds = "재퍼니스 친";
//   window.localStorage.setItem("breeds", breeds)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
//
// $('#submit').on('click', function(e){
// //   var dog_name = $('#dog0-name').text();
//   console.log();
//   var sex = "암컷";
//   window.localStorage.setItem("sex", sex)
//   // window.localStorage.setItem("name2", "chelsea2")
//   window.location.href='login.html';
// });
