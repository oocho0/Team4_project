// 람다 이용하여 my 데이터 정보 넘어주기 연결 확인

$(document).ready(function(){
    var ENDPOINT = 'https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev'
    function load_report(){
        var user_id = localStorage.getltem("user_id");
        console.log(typeof(user_id));
    }
    //load_report();
})

$('#submitdog').on('click', function(e){
    var ENDPOINT = 'https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev'

    var regist_num = $('#registrationnumber').val();
    var user_id = window.localStorage.getItem("user_id")
    var name = $('#name').val();
    var birth = $('#birth').val();
    var weight = parseFloat($('#weight').val());
    var kind_info_dog_kind = $('#kind_info_dog_kind').val();
    var sex = $("input:radio[name=radio-buttons]:checked").val();
    console.log(regist_num,user_id,name,birth,weight,kind_info_dog_kind,sex);
    
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
            if(r["errorType"] == "IntegrityError"){
                alert("중복되는 등록번호가 있습니다!");
            }
            else{

                AWS.config.update({
                    region: 'us-east-1',
                    credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: 'us-east-1:02967931-c30c-40dd-8d68-c6cb950167ba'
                    })
                })
    
                let files = document.getElementById("file").files;
                
                if (!files.length) {
                    return alert("업로드 파일이 없습니다.");
                }

                let file = files[0];
                let fileName = "dogface.png";

                let photoKey = 'dogs/'+regist_num+'/' + fileName;
                console.log(photoKey)
        
                let upload = new AWS.S3.ManagedUpload({
                    params: {
                        Bucket: 'pjt4image-newbucket',
                        Key: photoKey,
                        Body: file
                    }
                });
                console.log(upload);
            
                let promise = upload.promise();
            
                promise.then(
                    function(data) {
                        alert("업로드 성공!");
                        window.location.href='../html/doglist.html';
                    }, function(err) {
                    return alert("업로드 실패! ", err.message);
                });
            }
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