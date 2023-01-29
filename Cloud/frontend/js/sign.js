$(function(){

    //context path

    var ctx = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));

$("#signupWarn").text( '　' );

          //Ajax 활용 ID 중복체크, 중복이 아니면? true = 사용가능 ID

          var varIsNotDupId = false;

          //초기값 valid 적용

          $("#inputIdInSignup").removeClass("is-invalid");

          $("#inputIdInSignup").addClass("is-valid");

          $.ajax({

              type: "POST"

              , async: false

              , contentType:'application/json'

              , url: ctx + '/regi/findid'

              , datatype: "json"

              , data: JSON.stringify(viewData)

              , success: function( data ){



                  if( data === '0' ){

                      //컨트롤러에서 넘어온 결과가 0인 경우 사용 가능한 아이디로 판단

                      //alert('ok data 트루라고 했다');

                      $("#inputIdInSignup").removeClass("is-invalid");

                      $("#inputIdInSignup").addClass("is-valid");

                      varIsNotDupId = true;

                      idOk = true;

                      $("#signupWarn").text( '　' );

                      isOk = allOk( idOk, pw1Ok, pw2Ok, nameOk, emailOk );

                      if( isOk == true ){

                          $("#btnConfirm").prop("disabled",false);

                      }

                      $("#chkAllOk").text(idOk + ', ' + pw1Ok + ', ' + pw2Ok + ', ' + nameOk + ', ' + emailOk + '마지막 idOk:' + isOk );

                  }else{

                      //중복된 ID인 경우

                      $("#inputIdInSignup").removeClass("is-valid");

                      $("#inputIdInSignup").addClass("is-invalid");

                      idOk = false;

                      $("#chkAllOk").text(idOk + ', ' + pw1Ok + ', ' + pw2Ok + ', ' + nameOk + ', ' + emailOk + '마지막 idOk:' + isOk );

                      $("#signupWarn").text( '중복된 ID입니다. 다른 ID를 입력해 주세요.' );

                      $("#btnConfirm").prop("disabled",true);

                  }



              }, error: function( error ){

                  alert('error : ' + error);

              }

          });

      }else{

          //조건에 맞지 않는 경우

          idOk = false;

          $("#btnConfirm").prop("disabled",true);

          $("#inputIdInSignup").removeClass("is-valid");

          $("#inputIdInSignup").addClass("is-invalid");

      }

  });
