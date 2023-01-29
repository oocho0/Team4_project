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
$('#submit').on('click', function(e){
//   var dog_name = $('#dog0-name').text();
  console.log();
  var name = "chelsea";
  window.localStorage.setItem("name", name)
  // window.localStorage.setItem("name2", "chelsea2")
  window.location.href='login.html';
});
