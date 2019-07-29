$(document).ready(function(){
    $("#img1").click(function(){
        $("#img1").hide();
        $("#design").show();
        });
        $("#design").click(function(){
        $("#design").hide();
        $("#img1").show();
    });
    $("#img2").click(function(){
        $("#img2").hide();
        $("#develop").show();
        });
        $("#develop").click(function(){
        $("#develop").hide();
        $("#img2").show();
    });
    $("#img3").click(function(){
        $("#img3").hide();
        $("#product").show();
        });
        $("#product").click(function(){
        $("#product").hide();
        $("#img3").show();
    });


    $("#submit").click(function(event){
        var userName=$("#name").val();
        var userEmail=$("#email").val();
        var userMessage=$("#message").val();
        if((userName!=="") && (userEmail !== "") && (userMessage !="")){
            alert(userName + " ,We have received your message.Thank you for reaching out to us");
        }
        else 
        {
            alert("Fill the form please");
        }
        event.preventDefault();
    });

    $("#port1").mouseover(function(){
        $("#para1").show();
     });
    $("#port1").mouseout(function(){
        $("#para1").hide();
    });
    $("#port2").mouseover(function(){
        $("#para2").show();
     });
    $("#port2").mouseout(function(){
        $("#para2").hide();
    });
    $("#port3").mouseover(function(){
        $("#para3").show();
     });
    $("#port3").mouseout(function(){
        $("#para3").hide();
    });
    $("#port4").mouseover(function(){
        $("#para4").show();
     });
    $("#port4").mouseout(function(){
        $("#para4").hide();
    });
    $("#port5").mouseover(function(){
        $("#para5").show();
     });
    $("#port5").mouseout(function(){
        $("#para5").hide();
    });
    $("#port6").mouseover(function(){
        $("#para6").show();
     });
    $("#port6").mouseout(function(){
        $("#para6").hide();
    });
    $("#port7").mouseover(function(){
        $("#para7").show();
     });
    $("#port7").mouseout(function(){
        $("#para7").hide();
    });
    $("#port8").mouseover(function(){
        $("#para8").show();
     });
    $("#port8").mouseout(function(){
        $("#para8").hide();
    });
});
