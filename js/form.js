// JavaScript Document
$(document).ready(function() {	
	$("#button").click(function(){
		var error = 0;
		if($("#name").val().length < 2) {
			$("#name").addClass('error');
			error+=1;
		}
		if($("#email").val().indexOf('@') == -1) {
			$("#email").addClass('error');
			error+=1;
		}		
		if($("#message").val().length < 2) {
			$("#message").addClass('error');
			error+=1;
		}
		if(error==0) {
			$("#form").submit();
		}
	});
	
	$("#name, #email, #message").focus(function(){
		$(this).removeClass('error');
		$("#alert").fadeOut(500);
		$("#alert").removeClass('success');
		$("#alert").removeClass('error');
		
	});
	
	var str = window.location.href;
	var pos = str.search(/response=sent/);
	if(pos>-1) {
		$("#alert").fadeIn(600);
		$("#alert").html("Success! We received your message.");
		$("#alert").addClass("success");
		$("#alert").delay(5000).fadeOut(1000);
	}
	
	var pos = str.search(/response=error/);
	if(pos>-1) {
		$("#alert").fadeIn(600);
		$("#alert").html("Error! Something got wrong with the server. Please try again or call us: <strong>+44 20 3130 7090</strong>");
		$("#alert").addClass("error");
		$("#alert").delay(7000).fadeOut(1000);
	}
	
});