
$('#open-btn').on('click',function(){
    $("#side-bar").animate( {width:"30%"} , 1000)
})
$('.close').on('click',function(){
    $("#side-bar").animate( {width:"0%"} , 1000)
})


$('.sing1').on('click',function(){
    $("#singer-1").slideToggle(1000);
    $("#singer-2").slideUp(1000);
    $("#singer-3").slideUp(1000)
    $("#singer-4").slideUp(1000)
})

$('.sing2').on('click',function(){
    $("#singer-2").slideToggle(1000)
    $("#singer-1").slideUp(1000);
    $("#singer-3").slideUp(1000);
    $("#singer-4").slideUp(1000);
})
$('.sing3').on('click',function(){
    $("#singer-3").slideToggle(1000)
    $("#singer-2").slideUp(1000);
    $("#singer-1").slideUp(1000);
    $("#singer-4").slideUp(1000);
})
$('.sing4').on('click',function(){
    $("#singer-4").slideToggle(1000)
    $("#singer-2").slideUp(1000);
    $("#singer-3").slideUp(1000);
    $("#singer-1").slideUp(1000);
})

$('#example').showTimer({
    returnType:'box',

    wrapper_id:"myCountdown",
    local_s_days:"d",
    
      local_s_hrs:"h",
   
      local_s_min:"m",
    
      local_s_sec:"s",

  

    
  });
  

  $("#char-num").counter({
    
      goal: 100,default: 100,

    
    });
   
   