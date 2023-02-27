$(document).ready(function(){
    let rnumlist = window.localStorage.getItem("walking_dog_rnum")
    console.log(rnumlist)

    rnumlist = rnumlist.replace(/"/g, '');
    rnumlist = rnumlist.replace(/\[/g, '');
    rnumlist = rnumlist.replace(/\]/g, '');

    rnums =  (rnumlist.split(','));
    console.log(rnums)

    document.getElementById("today_report").src = "https://pjt4image-newbucket.s3.amazonaws.com/walk_info_image/"+rnums[1]+"/walkimage.jpg";
    //임시 map
    document.getElementById("today_map").src = "https://pjt4image-newbucket.s3.amazonaws.com/image/3/walkimage.jpg";
    $('#today_report').css({
        "position" : "absolute",
        "top" : "30px",
        "left" : "60px"
        
    })    
    $('#today_map').css({
        "position": "absolute",
        "top" : "290px",
        "left" : "85px"
    })
    
    // window.localStorage.removeItem("walking_dog_rnum")
    // window.localStorage.removeItem("walking_dog_name")
    // window.localStorage.removeItem("dog_name")
    // window.localStorage.removeItem("dog_rnum")
});