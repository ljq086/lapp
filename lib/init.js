/* init page */

alert("init 11.");

$(function(){
  $(".lapp_main").html("<button class='go'>GO</button>");
  $(".go").on("click",function(){
    $(".lapp_main").css("background-color":"#009966")
  });
});

