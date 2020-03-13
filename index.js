/********************************** FLIPPING BETWEEN DIVS ******************************/ 

var div1 = document.getElementById('inputs-container');
var front = document.getElementById("flip-card-inner");
var signup = document.getElementById("sign-up");
var login = document.getElementById("log-in");
function sign(){
     front.style.transform = "rotateY(180deg)";
     div1.style.display='none';
     signup.style.backgroundColor='green';
     login.style.backgroundColor='white'
}
function log(){
    front.style.transform = "rotateY(0deg)";
    div1.style.display='block';
    login.style.backgroundColor='blue';
    signup.style.backgroundColor='white';
}

/*********************************** VALIDATION FOR LOGGING ******************************/ 

$(document).ready(function(){
    $("#email-log").keyup(function(){
        if(validmaillog()){
            $("#email-log").css("border-bottom","3px solid green");
            $("#email-error-log").css("color","green");
            $("#email-error-log").html("valid email");
        }else{
            $("#email-log").css("border-bottom","3px solid red");
            $("#email-error-log").css("color","red");
            $("#email-error-log").html("unvalid email");
        }
    });
});

//////////////////////////////////

$(document).ready(function(){
$("#password-log").keyup(function(){
    if(validpasswordlog()){
     $("#password-log").css("border-bottom","3px solid green");
     $("#error-password-log").css("color","green");
     $("#error-password-log").html("valid password");
    }else{
         $("#password-log").css("border-bottom","3px solid red");
         $("#error-password-log").css("color","red");
         $("#error-password-log").html("unvalid passsword");
    }
 });
});

function validmaillog(){
    var email =$("#email-log").val();
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

/////////////////////////////////

function validpasswordlog(){
    var password =$("#password-log").val();
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if(pattern.test(password)){
        return true;
    }
    else{
        return false;
    }
}

/*********************************** VALIDATION FOR signning ******************************/ 

$(document).ready(function(){
    $("#user-sign").keyup(function(){
        if(checkUsername()){
         $("#user-sign").css("border-bottom","3px solid green");
         $("#user-error-sign").css("color","green");
         $("#user-error-sign").html("valid user name");
        }else{
             $("#user-sign").css("border-bottom","3px solid red");
             $("#user-error-sign").css("color","red");
             $("#user-error-sign").html("unvalid user name");
        }
     });
    });

$(document).ready(function(){
    $("#email-sign").keyup(function(){
        if(validmailsign()){
            $("#email-sign").css("border-bottom","3px solid green");
            $("#error-email-sign").css("color","green");
            $("#error-email-sign").html("valid email");
        }else{
            $("#email-sign").css("border-bottom","3px solid red");
            $("#error-email-sign").css("color","red");
            $("#error-email-sign").html("unvalid email");
        }
    });
});

//////////////////////////////////

$(document).ready(function(){
$("#password-sign").keyup(function(){
    if(validpasswordsign()){
     $("#password-sign").css("border-bottom","3px solid green");
     $("#error-password-sign").css("color","green");
     $("#error-password-sign").html("valid password");
    }else{
         $("#password-sign").css("border-bottom","3px solid red");
         $("#error-password-sign").css("color","red");
         $("#error-password-sign").html("unvalid passsword");
    }
 });
});

///////////////////////////////////////////////////////

function checkUsername(){
    var name =$("#user-sign").val();
    var pattern = /^[A-Z]{10}$/;
    if(pattern.test(name)){
        return true;
    }else{
        return false;
    }
}

////////////////////////////////////////////////////

function validmailsign(){
    var email =$("#email-sign").val();
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(email)){
        return true;
    }
    else{
        return false;
    }
}

/////////////////////////////////

function validpasswordsign(){
    var password =$("#password-sign").val();
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if(pattern.test(password)){
        return true;
    }
    else{
        return false;
    }
}


/*********************************** ADDING NEW COMPANY POP UP ******************************/ 
$(document).ready(function(){
$(".addcompany").click(function(){
    $("#company-new").toggle();
    $("#company-new").css("transition", "transform 0.7s");
  });
});

