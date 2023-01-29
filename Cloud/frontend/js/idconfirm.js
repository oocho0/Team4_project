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
