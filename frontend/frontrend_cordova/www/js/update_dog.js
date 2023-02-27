$(document).ready(function(){
    function load_report(){
        var user_id = localStorage.getItem("user_id");
        var regist_num = localStorage.getItem("report_dog_rnum");
        $.ajax({
            url: ENDPOINT +'/dogs/'+user_id,
            method: 'get',
            success: function(r){
                console.log(r)
                document.getElementById("image").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+regist_num+"/dogface.png";
                for($i=0; $i<r.items.length; $i++){
                    if(r.items[$i][0] == regist_num){
                        var dog_rnum = r.items[$i][0];
                        var dog_name = r.items[$i][2];
                        var dog_birth = r.items[$i][3];
                        var dog_weight = r.items[$i][4];
                        var dog_gender = r.items[$i][5];
                        var dog_kind = r.items[$i][6];

                        $('#name').attr("value", dog_name);
                        document.getElementById("birth").value=dog_birth;
                        $('#registrationnumber').attr("value", dog_rnum);
                        $('#weight').attr("value", dog_weight);
                        //gender도 가져온값 픽스해야함
                        if (dog_gender=='male'){
                            $("#male").prop("checked",true)
                        }
                        else{
                            $("#female").prop("checked",true)
                        }
                        $('#kind_info_dog_kind').val(dog_kind).prop("selected",true);
                    }
                }
            }
        })
    }
    load_report();
})

$('#updatedog').on('click', function(e){
    var regist_num = $('#registrationnumber').val();
    var user_id = "jm0504";//window.localStorage.getItem("user_id")
    var name = $('#name').val();
    var birth = $('#birth').val();
    var weight = parseFloat($('#weight').val());
    var kind_info_dog_kind = $('#kind_info_dog_kind').val();
    var sex = $("input:radio[name=radio-buttons]:checked").val();
    $.ajax({
        url: ENDPOINT+'/dogs/'+ user_id,
        method: 'put',
        datatype: 'json',
        async: true,
        data:JSON.stringify({
            dog_rnum: regist_num,
            dog_name: name,
            dog_birth: birth,
            dog_weight: weight,
            dog_kind: kind_info_dog_kind,
            dog_gender: sex
        }),
        success: function(r){
            console.log('success', r);
            AWS.config.update({
                region: 'us-east-1',
                credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
                })
            })
            let files = document.getElementById("file").files;
            if (files.length!=0){
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
                let promise = upload.promise();
            
                promise.then(
                    function(data) {
                        Swal.fire(
                        '강아지 수정.',         // Alert 제목
                         '강아지 수정에 성공하였습니다.',  // Alert 내용
                           'success',                         // Alert 타입
                           ).then(function(){
                           window.location.href='../html/doglist.html';
                           })

                    }, function(err) {
                    return alert("강아지 등록에 실패했습니다! 사진파일을 다시 확인해주세요.", err.message);
                });
            }
            else{
                Swal.fire(
                                        '강아지 수정.',         // Alert 제목
                                         '강아지 수정에 성공하였습니다.',  // Alert 내용
                                           'success',                         // Alert 타입
                                           ).then(function(){
                                           window.location.href='../html/doglist.html';
                                           })
            }
        },
        fail: function(err){
            console.log('failed', err);
            alert('failed! reloading...')
        },
        complete: function(r){
            $("#div_ajax_load_image").hide();
            console.log('completed', r);
        }
    });
});

$('#deldog').on('click', function(e){
    var regist_num = window.localStorage.getItem("report_dog_rnum")
    $.ajax({
        url: ENDPOINT +'/dogs/del',
        method: 'post',
        datatype: 'json',
        async: true,
        data:JSON.stringify({
            regist_num: regist_num,
        }),
        success: function(r){
        },
        fail: function(err){
            console.log('failed', err);
            alert('failed! reloading...')
        },
        complete: function(r){
            Swal.fire(
                '강아지 삭제.',         // Alert 제목
                '강아지 삭제에 성공하였습니다.',  // Alert 내용
                'success',                         // Alert 타입
                ).then(function(){
                 window.location.href='../html/doglist.html';
              })
        }
    })
})
// $('#submitdog').on('click', function(e){
//     var regist_num = $('#registrationnumber').val();
//     var user_id = window.localStorage.getItem("user_id")
//     var name = $('#name').val();
//     var birth = $('#birth').val();
//     var weight = parseFloat($('#weight').val());
//     var kind_info_dog_kind = $('#kind_info_dog_kind').val();
//     var sex = $("input:radio[name=radio-buttons]:checked").val();
//     console.log(regist_num,user_id,name,birth,weight,kind_info_dog_kind,sex);
    
//     $.ajax({
//         url: ENDPOINT+'/dogs',
//         method: 'post',
//         datatype: 'json',
//         async: true,
//         data:JSON.stringify({
//             regist_num: regist_num,
//             user_id: user_id,
//             name: name,
//             birth: birth,
//             weight: weight,
//             kind_info_dog_kind: kind_info_dog_kind,
//             sex: sex
//         }),
//         success: function(r){
//             console.log('success', r);
//             if(r["errorType"] == "IntegrityError"){
//                 alert("중복되는 등록번호가 있습니다!");
//             }
//             else{

//                 AWS.config.update({
//                     region: 'us-east-1',
//                     credentials: new AWS.CognitoIdentityCredentials({
//                     IdentityPoolId: IdentityPoolId
//                     })
//                 })
    
//                 let files = document.getElementById("file").files;
                
//                 if (!files.length) {
//                     return alert("업로드 파일이 없습니다.");
//                 }

//                 let file = files[0];
//                 let fileName = "dogface.png";

//                 let photoKey = 'dogs/'+regist_num+'/' + fileName;
//                 console.log(photoKey)
        
//                 let upload = new AWS.S3.ManagedUpload({
//                     params: {
//                         Bucket: 'pjt4image-newbucket',
//                         Key: photoKey,
//                         Body: file
//                     }
//                 });
//                 console.log(upload);
            
//                 let promise = upload.promise();
            
//                 promise.then(
//                     function(data) {
//                         alert("강아지 등록에 성공했습니다!");
//                         window.location.href='../html/doglist.html';
//                     }, function(err) {
//                     return alert("강아지 등록에 실패했습니다! 사진파일을 다시 확인해주세요.", err.message);
//                 });
//             }
//         },
//         beforeSend: function () {
//             var width = 0;
//             var height = 0;
//             var left = 0;
//             var top = 0;

//             width = 100;
//             height = 100;

//             top = ( $(window).height() - height ) / 2 + $(window).scrollTop();
//             left = ( $(window).width() - width ) / 2 + $(window).scrollLeft();                        

//             if($("#div_ajax_load_image").length != 0) {
//                     $("#div_ajax_load_image").css({
//                             "top": top+"px",
//                             "left": left+"px"
//                     });
//                     $("#div_ajax_load_image").show();
//             }
//             else {
//                     $('body').append('<div id="div_ajax_load_image" style="position:absolute; top:' + top + 'px; left:' + left + 'px; width:' + width + 'px; height:' + height + 'px; z-index:9999; filter:alpha(opacity=50); opacity:alpha*0.5; margin:auto; padding:0; "><img src="../image/loading.gif" style="width:100px; height:100px;"></div>');
//             }

//         },
//         fail: function(err){
//             console.log('failed', err);
//             alert('failed! reloading...')
//         },
//         complete: function(r){
//             $("#div_ajax_load_image").hide();
//             console.log('completed', r);
//         }
//     });
// });