function load_data(){
    $.ajax({
        type:"GET",
        url :ENDPOINT+"/weather",
        success:function(res){
            if (res["result"][0] == ["맑음"]){
                $("#weather_img").attr("src","../image/sunny.png");
            }else if(res["result"][0] == ["구름"]){
                $("#weather_img").attr("src","../image/cloud.png");
            }else if(res["result"][0] == ["뇌우"]){
                $("#weather_img").attr("src","../image/thunder.png");
            }else if(res["result"][0] == ["눈"]){
                $("#weather_img").attr("src","../image/snow.png");
            }else if(res["result"][0] == ["먼지"]){
                $("#weather_img").attr("src","../image/dust.png");
            }else if(res["result"][0] == ["비"]){
                $("#weather_img").attr("src","../image/rain.png");
            }else if(res["result"][0] == ["안개"]){
                $("#weather_img").attr("src","../image/fog.png");
            }else if(res["result"][0] == ["이슬비"]){
                $("#weather_img").attr("src","../image/drizzle.png");
            }else if(res["result"][0] == ["화산재"]){
                $("#weather_img").attr("src","../image/fire.png");
            }else{
                $("#weather_img").attr("src","../image/typhoon.png");
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
