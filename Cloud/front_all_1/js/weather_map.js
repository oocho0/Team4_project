var Endpoint="https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev"
function load_data(){
    $.ajax({
        type:"GET",
        url :Endpoint+"/weather",
        success:function(res){
            //console.log(res["result"]);
            $('#weather_info').text(res["result"][0]+" "+res["result"][3]+" "+res["result"][1]+"℃ "+res["result"][2]+"%");
        },
        fail:function(err){
            console.log(err);
        }
    })
}
load_data()
