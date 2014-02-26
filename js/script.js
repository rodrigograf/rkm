// JavaScript Document
$(document).ready(function(){

var showing = 0;
var itemSum = $(".background .photo").size() - 1;

	$(".arrow").click(function() {
		if($(this).hasClass("left")) { 
			showing-=1;
			if(showing < 0) {
				showing = itemSum;
			}
		}
		if($(this).hasClass("right")) { 
			showing+=1;
			if(showing > itemSum) {
				showing = 0;
			}
		}
		
		$(".background .photo.active").fadeOut(300, function() {
			$(".background .photo").removeClass("active");
		});
		
		$(".background .photo").eq(showing).fadeIn(400, function() {
			$(".background .photo").eq(showing).addClass("active");
		});
		
		$(".credits .client").hide();
		$(".credits .client").eq(showing).show();
		
	});

});