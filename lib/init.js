/* init page */
try{
    var ip="192.168.1.12";
    alert(ip);
  
    $(".lapp_main").html("<button class='go'>GO</button>");
    $(".go").on("click",function(){
      $(".lapp_main").css("background-color":"#009966");
    });
  }catch(e){
    console.log(e);
  }


