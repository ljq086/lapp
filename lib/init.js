/* init page */
try{
    var ip="192.168.1.12";
    var port="8007";
    alert(ip);
    lapp_connectServer({ip:ip,port:port});
    $(".lapp_main").html("<button class='go'>GO</button>");
    $(".go").on("click",function(){
      $(".lapp_main").css("background-color","#009966");
    });
  }catch(e){
    alert("error at init.js");
    console.log(e);
  }


