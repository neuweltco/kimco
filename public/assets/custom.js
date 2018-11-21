


//Code for navigation submenu items > caption hover
$(document).ready(function(){
	var $boxes =  $(".hover_content"),
		$productLinks = $(".list_link").mouseover(function(){
			$boxes.hide().filter('#box' + this.id).show();
		});
});