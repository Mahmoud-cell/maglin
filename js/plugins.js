$(document).ready(function(){
    
//show color option div when click on the gear

$('.gear-check').click(function()
{
$('.color-option').fadeToggle();  

});
//Change Theme Color On Click

var colorLi=$('.color-option ul li');

$('.color-option ul li')
.eq(0).css('backgroundColor','#ff9800').end()
.eq(1).css('backgroundColor','#E426D5').end()
.eq(2).css('backgroundColor','#009AFF').end()
.eq(3).css('backgroundColor','#E27D60');

colorLi.click(function(){
 $("link[href*='Theme']").attr('href',$(this).attr('data-value'));//here i search about "Theme word "then when i find the values of every color run
 // console.log($("link[href*='Theme']"))
  //console.log();
});
 });
 