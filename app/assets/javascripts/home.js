$(document).on('ready page:load', function () {
	// Configure/customize these variables.
	var showChar = 200;  // How many characters are shown by default
	var ellipsestext = "...";
	var moretext = "More";
	var lesstext = "Less";


	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);

			var html = c + '<span class="moreellipses">'
				+ ellipsestext+ '&nbsp;</span><span class="morecontent"><span>'
				+ h + '</span>&nbsp;&nbsp;' +
				'<ul class="actions align-center"><li><a href="javascript:;" class="button morelink">' + moretext + '</a></li></ul>' +
				'</span>';


			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		console.log($(this).parent().parent().parent().parent().hasClass("less"));
		if($(this).parent().parent().parent().parent().hasClass("less")) {
			$(this).parent().parent().parent().parent().removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).parent().parent().parent().parent().addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().parent().parent().prev().toggle();
		$(this).parent().parent().prev().toggle();
		return false;
	});
});