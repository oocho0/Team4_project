$(function(){
    $('.body').css({
        "background-color": "#FFFBDB"
    })
    function load_dog(){
        var user_id = localStorage.getItem("user_id");
        $('#user_name').html(user_id+ " 님");
        $.ajax({
            type:"GET",
            url :ENDPOINT+"/dogs/"+user_id,
            async:false,
            success:function(resp){
                if (resp.items.length == 0){
                    $('#empty').html("등록된 강아지가 없습니다. 오른쪽 상단의 반려견 관리에서 반려견을 추가하세요")
                    $('.dog:eq(0)').css({
                        "display":"none"
                    });
                    $('.dog:eq(1)').css({
                        "display":"none"
                    });
                    $('.dog:eq(2)').css({
                        "display":"none"
                    })
                } else if(resp.items.length == 1){
                    $('.dog_name:eq(0)').html(resp['items'][0][2]);
                    $('.dog_name:eq(0)').attr("data-register-dog",resp['items'][0][0]);

                    $('.dog:eq(0)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    $('.dog:eq(1)').css({
                        "display":"none"
                    });
                    $('.dog:eq(2)').css({
                        "display":"none"
                    })
                    var dog_rnum1 = resp['items'][0][0];
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                        
                } else if(resp.items.length == 2){
                    $('.dog_name:eq(0)').html(resp['items'][0][2]);
                    $('.dog_name:eq(1)').html(resp['items'][1][2]);
                    $('.dog_name:eq(0)').attr("data-register-dog",resp['items'][0][0]);
                    $('.dog_name:eq(1)').attr("data-register-dog",resp['items'][1][0]);
                    $('.dog:eq(0)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    $('.dog:eq(1)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    $('.dog:eq(2)').css({
                        "display":"none"
                    })
                    var dog_rnum1 = resp['items'][0][0];
                    var dog_rnum2 = resp['items'][1][0];
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                    document.getElementById("dog2-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum2+"/dogface.png";
                } else {
                    $('.dog_name:eq(0)').html(resp['items'][0][2]);
                    $('.dog_name:eq(1)').html(resp['items'][1][2]);
                    $('.dog_name:eq(2)').html(resp['items'][2][2]);
                    $('.dog_name:eq(0)').attr("data-register-dog",resp['items'][0][0]);
                    $('.dog_name:eq(1)').attr("data-register-dog",resp['items'][1][0]);
                    $('.dog_name:eq(2)').attr("data-register-dog",resp['items'][2][0]);
                    $('.dog:eq(0)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    $('.dog:eq(1)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    $('.dog:eq(2)').css({
                        "margin":"8px",
                        "text-align":"center",
                    });
                    var dog_rnum1 = resp['items'][0][0];
                    var dog_rnum2 = resp['items'][1][0];
                    var dog_rnum3 = resp['items'][2][0];
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                    document.getElementById("dog2-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum2+"/dogface.png";
                    document.getElementById("dog3-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum3+"/dogface.png";
                }
                    // 등록번호 = resp['items'][i][0];
                    //$('userid').text(resp['items'][i][1]);
                    //$('#dog1_name').text(resp['items'][0][2]);
                    //생년월일 = resp['items'][i][3]
                    //무게 = resp['items'][i][4]
                    //성별 = resp['items'][i][5]
                    //종= resp['items'][i][6]
            },
            fail:function(err){
                console.log(err);
            }
        })
    }
    load_dog();

    var usersdog = [];
    $(".dog").find('.dog_name').each(function(i, pTag){
        usersdog.push($(pTag).text());
    });
    window.localStorage.setItem("dog_name", JSON.stringify(usersdog))

    var registeruserdog = [];
    $(".dog").find(".dog_name").each(function(i, pTag){
        registeruserdog.push($(pTag).attr('data-register-dog'));
    })
    window.localStorage.setItem("dog_rnum", JSON.stringify(registeruserdog));
    

    $('.dog').on('click', function(e){
        var targetDog = $(e.currentTarget);
    
        if(targetDog.attr('data-checkyn') != 'true'){
            targetDog.find('.dog_check').show();
            targetDog.attr('data-checkyn', 'true');
        }else{
            $(".dog_check").hide();
            targetDog.attr('data-checkyn', 'false');
        }
    
    });

    // 산책 시작 버튼
    $('#btnWalking').on('click', function(e){
        var checkedDogs = [];
        var checkedRegisteruserdog = [];
        $("[data-checkyn=true]").find('.dog_name').each(function(i, pTag){
            checkedDogs.push($(pTag).text());
            checkedRegisteruserdog.push($(pTag).attr("data-register-dog"));
        });
        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var hours = ('0' + today.getHours()).slice(-2); 
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2); 

        var dateString = year + '-' + month  + '-' + day + " " + hours + ':' + minutes  + ':' + seconds;


        window.localStorage.setItem("start_time", dateString)
        console.log(JSON.stringify(dateString))
        window.localStorage.setItem("walking_dog_name", JSON.stringify(checkedDogs));
        window.localStorage.setItem("walking_dog_rnum", JSON.stringify(checkedRegisteruserdog));
        location.href='map.html';
    });
});

