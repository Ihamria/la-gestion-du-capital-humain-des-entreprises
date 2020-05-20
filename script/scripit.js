$(document).ready(function(){
    $('#company').click(function(){
    $('#company-new').slideToggle(1000);
   });
   $('#info').click(function(){
       $('.childs').slideToggle(1000);
       $(this).text('Hide').click(function(){
     if($(this).text()==='Hide'){
         $(this).text('show');
     }
     else{
         $(this).text('Hide');
     }
       });
   });
 });
 
  //recherch Employe
  $(document).ready(function(){
     $('#recherche-Employee').keyup(function (){
              var NomSalarie =$('.nomMatricule');
             var recherch=$('#recherche-Employee');
             for(var i=0; i<NomSalarie.length;i++){
             if(recherch.val()===NomSalarie[i].innerText){
               $(NomSalarie[i]).parents('.divs').css("box-shadow","0px 0px 20px yellow");
               $(NomSalarie[i]).parents('.divs').css("flex-basis","29%");
                $("#recherche-Employee").val('');
             }else{
                 $(NomSalarie[i]).parents('.divs').css("box-shadow","9px 8px 9px grey");
                 $(NomSalarie[i]).parents('.divs').css("flex-basis","25%");
             }
         }
     });
 });
