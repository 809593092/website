/*TMODJS:{"version":2,"md5":"a4243807e423699d6ffe4734de6527cb"}*/
template('tpl/header',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,i=$data.i,$escape=$utils.$escape,$out='';$out+='<script type="text/html" id="head"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">SP<i class="fa fa-circle"></i>T</a> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-right"> ';
$each(list,function(value,i){
$out+=' <li ';
if(value.active){
$out+=' class="active" ';
}
$out+='> <a href="';
$out+=$escape(value.href);
$out+='">';
$out+=$escape(value.name);
$out+='</a> </li> ';
});
$out+='  </ul> </div> </div> </script>';
return new String($out);
});