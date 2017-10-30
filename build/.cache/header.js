/*TMODJS:{"version":168,"md5":"701cd9ab429e97516c9e943e36c565c7"}*/
template('header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,menuList=$data.menuList,value=$data.value,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="container"> <div class="navbar-header"> <a href="index.html" style="padding:0;margin:0;"><font color="#FFF" style="line-height:80px;">龙耀互联|3D手机全产业链生产厂家</font></a> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-right"> ';
$each(menuList,function(value,i){
$out+=' ';
if(value.active){
$out+=' <li class="active" > <a href="';
$out+=$escape(value.href);
$out+='">';
$out+=$escape(value.name);
$out+='</a> </li> ';
}else{
$out+=' <li > <a href="';
$out+=$escape(value.href);
$out+='" style="color:#FFF;">';
$out+=$escape(value.name);
$out+='</a> </li> ';
}
$out+=' ';
});
$out+=' </ul> </div> </div> ';
return new String($out);
});