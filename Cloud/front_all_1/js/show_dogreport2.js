$(document).ready(function(){
    var ENDPOINT = 'https://yfk3z7t5r5.execute-api.us-east-1.amazonaws.com/dev'
    
    function load_report(){
        var user_id = localStorage.getItem("user_id");
        var regist_num = localStorage.getItem("report_dog_rnum");
        $.ajax({
            url: ENDPOINT +'/dogs/'+user_id+'/'+regist_num,
            method: 'get',
            success: function(r){
                console.log(r.category_walk);
                console.log(r.dog_walk);
                
                var dog_wn = r.category_walk[0][0];
                $('#dog-wn').html(dog_wn);
                
                var today_cnt = 0
                var accum_time = 0
                var accum_dis = 0
                // 오늘 산책 횟수, 산책시간, 산책 거리 계산
                for($i=0;$i<r.dog_walk.length; $i++){
                    var tmp = new Date(r.dog_walk[$i][0])
                    var today = new Date();
                    if(tmp.getFullYear() === today.getFullYear()
                        && tmp.getMonth() === today.getMonth()
                        && tmp.getDate() === today.getDate()){
                            today_cnt+=1;
                            accum_time += r.dog_walk[$i][2];
                            accum_dis += r.dog_walk[$i][3];

                    } 
                }
                $('#today-wn').html(today_cnt);
                $('#today-walktime').html(accum_time);
                $('#today-walkdis').html(accum_dis);
                
                //min_time, max_time 같은 경우
                if(r.category_walk[0][1] == r.category_walk[0][2]){
                    if(r.category_walk[0][1]>accum_time){
                        $('#bar_min').css({
                            "width" : accum_time+"px",
                            "background" :"#86C8BC"
                        })

                        $('#bar_middle').css({
                            "width" : (r.category_walk[0][1]-accum_time) +"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else{
                        $('#bar_min').css({
                            "width" : accum_time+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle').css({
                            "width" : (accum_time-r.category_walk[0][1]) +"px",
                            "background" :"#86C8BC"
                        })
                    }
                    $('#mintime').html(r.category_walk[0][1]);
                    $('#min-width').css({
                        "width" : (r.category_walk[0][1]-5)+"px",
                    })
                }
                else{
                    if(r.category_walk[0][1]>accum_time){
                        $('#bar_min').css({
                            "width" : accum_time+"px",
                            "background" :"#86C8BC"
                        })
                        $('#bar_middle').css({
                            "width" : (r.category_walk[0][1]-accum_time) +"px",
                            "border-right": "solid #535353"
                        })
                        $('#bar_max').css({
                            "width" : (r.category_walk[0][2]-r.category_walk[0][1]) +"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else if(r.category_walk[0][1]<=accum_time && r.category_walk[0][2]>=accum_time){
                        $('#bar_min').css({
                            "width" : accum_time+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle').css({
                            "width" : (accum_time-r.category_walk[0][1]) +"px",
                            "background" :"#86C8BC"
                        })
                        $('#bar_max').css({
                            "width" : (r.category_walk[0][2]-accum_time)+"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else if(r.category_walk[0][2]<accum_time){
                        $('#bar_min').css({
                            "width" : r.category_walk[0][1]+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle').css({
                            "width" : (r.category_walk[0][2]-r.category_walk[0][1]) +"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })
                        $('#bar_max').css({
                            "width" : (accum_time - r.category_walk[0][2])+"px",
                            "background" :"#86C8BC",
                        })
                    }
                    $('#mintime').html(r.category_walk[0][1]);
                    $('#maxtime').html(r.category_walk[0][2]);
                    $('#min-width').css({
                        "width" : r.category_walk[0][1]-5+"px"
                    })
                    $('#max-width').css({
                        "width" : (r.category_walk[0][2]-r.category_walk[0][1]-10) +"px"
                    })
                }

                //종별-오늘 distance 비교
                if(r.category_walk[0][3] == r.category_walk[0][4]){
                    if(r.category_walk[0][3]>accum_dis){
                        $('#bar_min2').css({
                            "width" : accum_dis+"px",
                            "background" :"#86C8BC"
                        })

                        $('#bar_middle2').css({
                            "width" : (r.category_walk[0][3]-accum_dis) +"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else{
                        $('#bar_min2').css({
                            "width" : accum_dis+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle2').css({
                            "width" : (accum_dis-r.category_walk[0][3]) +"px",
                            "background" :"#86C8BC"
                        })
                    }
                    $('#mindis').html(r.category_walk[0][3]);
                    // $('#min-width2').css({
                    //     "width" : (r.category_walk[0][3]-5)+"px",
                    // })
                }
                else{
                    if(r.category_walk[0][3]>accum_dis){
                        $('#bar_min2').css({
                            "width" : accum_dis+"px",
                            "background" :"#86C8BC"
                        })
                        $('#bar_middle2').css({
                            "width" : (r.category_walk[0][3]-accum_dis) +"px",
                            "border-right": "solid #535353"
                        })
                        $('#bar_max2').css({
                            "width" : (r.category_walk[0][4]-r.category_walk[0][3]) +"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else if(r.category_walk[0][3]<=accum_dis && r.category_walk[0][4]>=accum_dis){
                        $('#bar_min2').css({
                            "width" : accum_dis+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle2').css({
                            "width" : (accum_dis-r.category_walk[0][3]) +"px",
                            "background" :"#86C8BC"
                        })
                        $('#bar_max2').css({
                            "width" : (r.category_walk[0][4]-accum_dis)+"px",
                            "border-right": "solid #535353"
                        })
                    }
                    else if(r.category_walk[0][4]<accum_dis){
                        $('#bar_min2').css({
                            "width" : r.category_walk[0][3]+"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })

                        $('#bar_middle2').css({
                            "width" : (r.category_walk[0][4]-r.category_walk[0][3]) +"px",
                            "background" :"#86C8BC",
                            "border-right": "solid #535353"
                        })
                        $('#bar_max2').css({
                            "width" : (accum_dis - r.category_walk[0][4])+"px",
                            "background" :"#86C8BC",
                        })
                    }
                    $('#mindis').html(r.category_walk[0][3]);
                    $('#maxdis').html(r.category_walk[0][4]);
                    // $('#min-width2').css({
                    //     "width" : r.category_walk[0][3]-5+"px"
                    // })
                    // $('#max-width2').css({
                    //     "width" : (r.category_walk[0][4]-r.category_walk[0][3]-10) +"px"
                    // })
                }
            }
        })
    }
    load_report();
})