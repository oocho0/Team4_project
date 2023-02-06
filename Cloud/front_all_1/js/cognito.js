var poolData ={
    UserPoolId: 'us-east-1_K7gN6wFfw',
    ClientId: '5q6dnmf62neq6t0sfkf8bljset'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
// 회원가입
var cognitoUser;
function signOut(){
    cognitoUser.signOut();
}
function submitSignUp() {
    var attributeList = [];

    var username = document.getElementById("signup-id").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-pwd").value;
    var dataEmail = {
        Name: 'email',
        Value : email
    };

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function (err, result) {
        // alert(err.message)
        if (err) {
            if(err.message == "User already exists"){
                alert("이미 가입된 유저 아이디 입니다!")
            }
            if(err.message == "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$" || err.message == "Password did not conform with policy: Password not long enough"){
                alert("비밀번호는 8자 이상, 소문자와 숫자를 포함해야 합니다.")
            }
            // alert(err.message);
            console.log(err.message);
            return;
        }

    alert("회원가입이 완료되었습니다! 로그인창으로 이동해주세요.")
    console.log('user name is ' + result.user.getUsername());
    });
}
//로그인
function loginUser(){
    var user_name = document.getElementById("login-id").value;
    var user_Pw = document.getElementById("login-pwd").value;
    var authenticationData = {
        Username : user_name,
        Password : user_Pw
        };
    var userData = {
        Username : user_name, 
        Pool : userPool
    };
    
    var authenticationDetails  = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData)
    cognitoUser  = new AmazonCognitoIdentity.CognitoUser(userData)
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            // console.log('success');
            // console.log('access token + ' + result.getAccessToken().getJwtToken());
            // alert(result)
            window.location.replace('../html/frontend.html');
            window.localStorage.setItem("user_id", user_name);
            
            
            
        },
        onFailure: function(err) {
            if(err == "NotAuthorizedException: Incorrect username or password."){
                alert("잘못된 아이디 또는 패스워드 입니다. 다시 입력해주세요!")
            }
        }
    });
}