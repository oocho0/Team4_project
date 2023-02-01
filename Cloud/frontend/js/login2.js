// 람다 이용하여 my 데이터 정보 넘어주기 연결 확인

$(document).ready(function(){
    var ENDPOINT = 'https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev'
    function load_report(){
      var user_id = localStorage.getltem("user_id");
      console.log(typeof(user_id));
    }
    $('#submit').on('click', function(e){
        var regist_num = parseInt($('#registrationnumber').val());
        var user_id = "3";
        var name = $('#name').val();
        var birth = $('#birth').val();
        var weight = parseFloat($('#weight').val());
        var kind_info_dog_kind = $('#kind_info_dog_kind').val();
        var sex = $("input:radio[name=radio-buttons]:checked").val();
        console.log(regist_num,user_id,name,birth,weight,kind_info_dog_kind,sex);
        console.log(typeof(weight));
        $.ajax({
            url: ENDPOINT+'/dogs',
            method: 'post',
            datatype: 'json',
            async: true,
            data:JSON.stringify({
                regist_num: regist_num,
                user_id: user_id,
                name: name,
                birth: birth,
                weight: weight,
                kind_info_dog_kind: kind_info_dog_kind,
                sex: sex
            }),
            success: function(r){
                console.log('success', r);
            },
            fail: function(err){
                console.log('failed', err);
                alert('failed! reloading...')
            },
            complete: function(r){
                console.log('completed', r);
            }
        });
    });
})
