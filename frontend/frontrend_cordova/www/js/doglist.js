$(document).ready(function(){
    function load_data(){
        var user_id=window.localStorage.getItem("user_id");
        $('#user_name').html(user_id+ " 님");
        $.ajax({
            url: ENDPOINT +'/dogs/'+user_id,
            method: 'get',
            success: function(r){
                $('.body').css({
                    "background-color": "#FFFBDB"
                })
                if(r.items.length == 0){
                    $('#no-dog').html("등록된 강아지가 없습니다. 아래에서 강아지를 추가해주세요!");
                    $('#no-dog').css({
                        "font-size" : "15px",
                        "text-align" : "center"
                    })
                }
                else if(r.items.length == 1){
                    var dog_name1 = r.items[0][2];
                    var dog_birth1 = r.items[0][3];
                    var dog_rnum1 = r.items[0][0];
                    $('#dog1-name').html(dog_name1);
                    $('#dog1-birth').html(dog_birth1);

                    $('#dog1').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                    $('#dog1-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                }
                    // console.log(r.items[0]);
                
                else if(r.items.length == 2){
                    var dog_name1 = r.items[0][2];
                    var dog_birth1 = r.items[0][3];
                    var dog_rnum1 = r.items[0][0];
                    $('#dog1-name').html(dog_name1);
                    $('#dog1-birth').html(dog_birth1);

                    var dog_name2 = r.items[1][2];
                    var dog_birth2 = r.items[1][3];
                    var dog_rnum2 = r.items[1][0];
                    $('#dog2-name').html(dog_name2);
                    $('#dog2-birth').html(dog_birth2);

                    $('#dog1').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    $('#dog2').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    $('#dog1-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                    $('#dog2-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                    document.getElementById("dog2-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum2+"/dogface.png";
                    
                }
                else{ //강아지 3마리
                    var dog_name1 = r.items[0][2];
                    var dog_birth1 = r.items[0][3];
                    var dog_rnum1 = r.items[0][0];
                    $('#dog1-name').html(dog_name1);
                    $('#dog1-birth').html(dog_birth1);

                    var dog_name2 = r.items[1][2];
                    var dog_birth2 = r.items[1][3];
                    var dog_rnum2 = r.items[1][0];
                    $('#dog2-name').html(dog_name2);
                    $('#dog2-birth').html(dog_birth2);

                    var dog_name3 = r.items[2][2];
                    var dog_birth3 = r.items[2][3];
                    var dog_rnum3 = r.items[2][0];
                    $('#dog3-name').html(dog_name3);
                    $('#dog3-birth').html(dog_birth3);

                    $('#dog1').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    $('#dog2').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    $('#dog3').css({
                        "margin": "auto",
                        "width": "85%",
                        "border-radius": "10px",
                        "background-color": "#91684A",
                        "text-align": "center",
                        "padding" : "20px",
                        "margin-bottom": "15px" })
                    $('#dog1-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                    $('#dog2-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                    $('#dog3-face').css({
                        "width": "90px",
                        "height": "90px",
                        "border": "solid 4px #FFFBDB",
                        "border-radius": "45px"
                    })
                    document.getElementById("dog1-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum1+"/dogface.png";
                    document.getElementById("dog2-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum2+"/dogface.png";
                    document.getElementById("dog3-face").src = "https://pjt4image-newbucket.s3.amazonaws.com/dogs/"+dog_rnum3+"/dogface.png";
                    $("#plusbtn").hide();
                }
            },
            fail: function(err){
                console.log('failed', err);
            },
            complete: function(r){
                console.log('completed', r);
            }
        });
    }
    load_data();
});


$('#dog1').on('click', function(e){
    var dog_name = $('#dog1-name').text();
    window.localStorage.setItem("dog_name", dog_name)
    //주인 아이디 임시저장(나중에 슬기님이)
    window.location.href='../html/show_dogreport.html';
    
});

$('#dog2').on('click', function(e){
    var dog_name = $('#dog2-name').text();
    window.localStorage.setItem("dog_name", dog_name)
    window.location.href='../html/show_dogreport.html';
});
    
$('#dog3').on('click', function(e){
    var dog_name = $('#dog3-name').text();
    window.localStorage.setItem("dog_name", dog_name)
    window.location.href='../html/show_dogreport.html';
});