function load_data(){
    $.ajax({
        type:"GET",
        url :ENDPOINT+"/weather",
        success:function(res){
            if (res["result"][0] == ["맑음"]){
                $("#weather").attr("src","../image/sunny.png");
            }else if(res["result"][0] == ["구름"]){
                $("#weather").attr("src","../image/cloud.png");
            }else if(res["result"][0] == ["뇌우"]){
                $("#weather").attr("src","../image/thunder.png");
            }else if(res["result"][0] == ["눈"]){
                $("#weather").attr("src","../image/snow.png");
            }else if(res["result"][0] == ["먼지"]){
                $("#weather").attr("src","../image/dust.png");
            }else if(res["result"][0] == ["비"]){
                $("#weather").attr("src","../image/rain.png");
            }else if(res["result"][0] == ["안개"]){
                $("#weather").attr("src","../image/fog.png");
            }else if(res["result"][0] == ["이슬비"]){
                $("#weather").attr("src","../image/drizzle.png");
            }else if(res["result"][0] == ["화산재"]){
                $("#weather").attr("src","../image/fire.png");
            }else{
                $("#weather").attr("src","../image/typhoon.png");
            }
            $('#pm').text(res["result"][3]);
            $('#temp').text(res["result"][1]);
            $('#hum').text(res["result"][2]);
        },
        fail:function(err){
            console.log(err);
        }
    })
}
load_data();

