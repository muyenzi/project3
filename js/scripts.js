/** business logic */
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


    $("#one").mouseover(function(){
        $("#para1").show();
     });
    $("#one").mouseleave(function(){
        $("#para1").hide();
    });
    $("#two").mouseover(function(){
        $("#para2").show();
     });
    $("#two").mouseleave(function(){
        $("#para2").hide();
    });
    $("#three").mouseover(function(){
        $("#para3").show();
     });
    $("#three").mouseleave(function(){
        $("#para3").hide();
    });
    $("#four").mouseover(function(){
        $("#para4").show();
     });
    $("#four").mouseleave(function(){
        $("#para4").hide();
    });
    $("#five").mouseover(function(){
        $("#para5").show();
     });
    $("#five").mouseleave(function(){
        $("#para5").hide();
    });
    $("#six").mouseover(function(){
        $("#para6").show();
     });
    $("#six").mouseleave(function(){
        $("#para6").hide();
    });
    $("#seven").mouseover(function(){
        $("#para7").show();
     });
    $("#seven").mouseleave(function(){
        $("#para7").hide();
    });
    $("#eight").mouseover(function(){
        $("#para8").show();
     });
    $("#eight").mouseleave(function(){
        $("#para8").hide();
    });


    $("#submit").click(function(event){
        var userName=$("#name").val();
        var userEmail=$("#email").val();
        var userMessage=$("#message").val();
  /** user logic interface */
        if((userName!=="") && (userEmail !== "") && (userMessage !="")){
            alert(userName + " ,We have received your message.Thank you for reaching out to us");
        }
        else 
        {
            alert("Fill the form please");
        }
        event.preventDefault();
    });
});
