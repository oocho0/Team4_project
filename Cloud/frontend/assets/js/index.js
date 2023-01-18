$(document).ready(function(){
    var ENDPOINT = 'https://epchtka2gg.execute-api.ap-northeast-2.amazonaws.com/dev/pjt7-usertable' 

    
    // 회원가입 버튼 누르면 실행되는 이벤트
    $('#submitButton').on('click', function(e){
        var id = $('#id').val();
        var password = $('#password').val();
        var age = $('#age').val();
        var name = $('#name').val();
        var country = $('#country').val();
        var covid = $('#covid').val();
        var temperature = $('#temperature').val();
        $.ajax({
            url: ENDPOINT,
            method: 'post',
            datapassword: 'json',
            async: true,
            data:JSON.stringify({
                id: id,
                password: password,
                age: age,
                name: name,
                country: country,
                covid: covid,
                temperature: temperature,
            }),
            beforeSend: function(){
                $('#p2').show();
            },
            success: function(r){
                console.log('success', r);
            },
            fail: function(err){
                console.log('failed', err);
                alert('failed! reloading...')
            },
            complete: function(r){
                console.log('completed', r);
                setTimeout(function() {
                    $('#p2').hide();
                    location.replace('Login.html');  
                }, 1000);
            }
        });
    });
    
    //로그인 버튼 누르면 실행되는 이벤트
    $('#loginButton').on('click', function(e){
        var id = $('#id').val();
        var password = $('#password').val();

        $.ajax({
            url: ENDPOINT+'/users', 
            method: 'post', 
            datapassword: 'json',
            async: true,
            data:JSON.stringify({
                id: id,
                password: password,
            }),
            beforeSend: function(){
                $('#p2').show();
            },
            success: function(r){
                console.log(r); 
                
                if(r == true){
                    console.log('success', r);
                    alert('로그인에 성공하였습니다.');

                    localStorage.setItem ("id", id);
                    localStorage.setItem ("password", password);
                    location.replace('Main.html');
                    
                    load_data();
                }else{          
                    console.log('fail', r);
                    alert('로그인에 실패하였습니다.');
                    location.replace('Login.html');
                }
            },
            fail: function(err){
                console.log('failed', err);
                alert('failed! reloading...');
            },
            complete: function(r){
                console.log('completed', r);
                setTimeout(function() {
                    $('#p2').hide();  
                }, 1000);
            }
        });
    }
    
    )
    
    $('#showButton').on('click', function(e){
        const id = localStorage.getItem('id');
        const password = localStorage.getItem('password');
            $('#showBox').html('<img style="width:450px; height:250px; object-fit:cover;" src="'+'./qrcodes/'+id+'/'+password+'/qrcode.jpg"/>');
    }
    

    )
})

