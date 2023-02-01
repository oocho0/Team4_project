<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR" import = "member.* " %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
    member.MemberDAO dao = new MemberDAO();
    MemberVO vo = new MemberVO(request.getParameter("id"),"");
    int result = dao.getMember(vo);
%>
<div id="isID"><%=result %></div>
<div id="canID"></div>
<input type="button" id="close" value="닫기">

  <script type="text/javascript">
window.onload = function(){
	var result = document.getElementById("isID").innerHTML;
	if(result == 3){
		document.getElementById("canID").innerHTML = "아이디 사용가능합니다.";
	}
	else{
		document.getElementById("canID").innerHTML = "아이디 중복가입되어 있습니다.";
	}

	document.getElementById("close").onclick = function(){
		//나의 부모창 id=here영역에 출력
		window.opener.document.getElementById("here").innerHTML
			= document.getElementById("canID").innerHTML;
		close();
	}
}
</script>
</body>
</html>
