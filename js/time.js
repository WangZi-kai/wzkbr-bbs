//from https://wangzi-kai.github.io/

$(document).ready(function(){

function show_date_time(){

window.setTimeout("show_date_time()", 1000);

BirthDay=new Date("08-10-2020 12:30:24");

today=new Date();

timeold=(today.getTime()-BirthDay.getTime());

sectimeold=timeold/1000

secondsold=Math.floor(sectimeold);

msPerDay=24*60*60*1000

e_daysold=timeold/msPerDay

daysold=Math.floor(e_daysold);

e_hrsold=(daysold-e_daysold)*-24;

hrsold=Math.floor(e_hrsold);

e_minsold=(hrsold-e_hrsold)*-60;

minsold=Math.floor((hrsold-e_hrsold)*-60);

seconds=Math.floor((minsold-e_minsold)*-60);

time.innerHTML="本站已安全运行："+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;

}

show_date_time();
  
});
