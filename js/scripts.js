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
        var name=$("#name").val();
        var email=$("#email").val();
        var message=$("#message").val();
        if((name!=="") && (email !== "") && (message !="")){
            alert(name + " ,We have received your message.Thank you for reaching out to us");
        }
        else 
        {
            alert("Fill the form please");
        }
        event.preventDefault();
        });
});
