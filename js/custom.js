$(function() {
	if (getCookie("auth0")=="yes") {
		showProfile();
	}
});
$("div.navbar-collapse >ul:nth-child(1) >li").click(function(e) {
	$("ul.nav:nth-child(1) > li.active").removeClass("active");
	$(this).addClass("active");
	e.preventDefault;
});
$(".nav-sidebar > li").click(function() {
	$(".nav-sidebar > li.active").removeClass("active");
	$(this).addClass("active");
});

$("#signIn > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click(function() {
	if ($("#signIn > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)")[0].value == "root" && $("#signIn > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")[0].value == "password") {
	showProfile();
	redirToProfile();
	}
	else {
	$("#signIn > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").append("<div class=\"alert alert-danger alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">\&times;</button><strong>Упс!</strong> Ошибочка в логине и/или пароле</div>");
	}	
});

$(".nav-sidebar > li").click(function(){
	$(".col-sm-9 > .active").removeClass("active");
	console.log($(".col-sm-9"));
	$(".col-sm-9 > div:nth-child("+($(this).index()+2)+")").addClass("active");	
});

$(".nav-sidebar > li:nth-child(1)").click(function() {
	$(".page-header").empty().append("Обзор");
	
});

$(".nav-sidebar > li:nth-child(2)").click(function() {
	$(".page-header").empty().append("Ваши карты");

});

$(".nav-sidebar > li:nth-child(3)").click(function() {
	$(".page-header").empty().append("Пополнение счета");
	
});

$(".nav-sidebar > li:nth-child(4)").click(function() {
	$(".page-header").empty().append("Платежи");
	
});

$(".nav-sidebar > li:nth-child(5)").click(function() {
	$(".page-header").empty().append("Переводы");
	
});

$(".nav-sidebar > li:nth-child(6)").click(function() {
	$(".page-header").empty().append("Делегирование суммы на кошельке");
	
});

$("ul.nav:nth-child(1) > li:nth-child(1) > a:nth-child(1)").click(function() {
//	redirToMain();
});

function showProfile() {
	$("ul.nav:nth-child(2) > li:nth-child(1)").hide();                	
    $("ul.nav:nth-child(2) > li:nth-child(2)").hide();
    $("ul.nav:nth-child(2) > li:nth-child(3)").css("display","block");
    document.cookie="auth0=yes";
}

function redirToProf() {
    $("#myCarousel").hide();
    $("div.container:nth-child(5)").hide();
}

function redirToMain(){
   	$("#myCarousel").show();
   	$("div.container:nth-child(5)").show();
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
