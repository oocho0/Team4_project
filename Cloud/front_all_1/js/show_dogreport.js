$(document).ready(function(){
    var ENDPOINT = 'https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev'
    function load_report(){
        var user_id = localStorage.getItem("user_id");
        var dog_name = localStorage.getItem("dog_name");
        $.ajax({
            url: ENDPOINT +'/dogs/'+user_id,
            method: 'get',
            success: function(r){
                console.log(r)
                for($i=0; $i<r.items.length; $i++){
                    if(r.items[$i][2] == dog_name){
                        var dog_birth = r.items[$i][3];
                        var dog_rnum = r.items[$i][0];
                        var dog_weight = r.items[$i][4];
                        var dog_kind = r.items[$i][6];

                        $('#dog-name').html(dog_name);
                        $('#dog-birth').html(dog_birth);
                        $('#dog-rnum').html(dog_rnum);
                        $('#dog-weight').html(dog_weight);
                        $('#dog-kind').html(dog_kind);

                        window.localStorage.setItem("report_dog_rnum", dog_rnum)

                    }
                } 
            }
        })
    }
    load_report();
})
