var Endpoint="https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev"
function load_data(){
    $.ajax({
        type:"GET",
        url :Endpoint+"/weather",
        success:function(res){
            //console.log(res["result"]);
            $('#weather').text(res["result"][0]);
            $('#pm').text(res["result"][3]);
            $('#temp').text(res["result"][1]);
            $('#hum').text(res["result"][2]);
        },
        fail:function(err){
            console.log(err);
        }
    })
}
load_data()

