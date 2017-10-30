$(function() {

	//设置标题
	obj.setTitle();
	//设置菜单的数据
	obj.addHeadHtml();
	
	//加载底部的html
	obj.addFooterHtml();
});

var obj = {
	company:"龙耀互联技术", //公司名名
};

/**
 * 获取当前请求的页面名称
 */
obj.getRequestPageName = function(){
	
	var pathName = "index.html";
	
	if(window.location.hostname == '127.0.0.1')
	{
		pathName = window.location.pathname.split("/")[2] == ""?"index.html":window.location.pathname.split("/")[2];	
	}else{
		pathName = window.location.pathname.split("/")[1] == ""?"index.html":window.location.pathname.split("/")[1];
	}
	
	//return pathName.replace(".html", "");
	//return pathName.split(".")[0];
	return pathName;
};


/**
 * 获取菜单的数据
 */
obj.getMenuData = function(pageName){
	
	var data = {menuList:[{href:"index.html", name:"首页"}, {href:"about.html", name:"产品中心"}, {href:"solution.html", name:"解决方案"}, {href:"join.html", name:"招商加盟"}, {href:"contact.html", name:"联系我们"}]};
	for(var i=0;i<data.menuList.length;i++)
	{
		console.log(pageName);
		if(data.menuList[i].href == pageName)
		{
			data.menuList[i].active = true;
		}else{
			data.menuList[i].active = false;
		}
	}
	
	return data;
};


function createHtml(data)
{
	var html = "";
	html += "<div class=\"coloe\"></div>";
	
}


obj.addHeadHtml = function(){
	var pageName = obj.getRequestPageName();
	
	var html = template("header", obj.getMenuData(pageName));
	$(".navbar-fixed-top").html(html);
};


obj.addFooterHtml = function()
{
	var html = template("footer");
	$("#footer").html(html);;
};

obj.setTitle = function()
{
	var pageName = obj.getRequestPageName();
	var data = obj.getMenuData(pageName);
	
	for(var i=0;i<data.menuList.length;i++)
	{
		if(data.menuList[i].href == pageName)
		{
			obj.company += "--"+ data.menuList[i].name;
		}
	}
	
	
	$(document).attr("title", obj.company);

};









