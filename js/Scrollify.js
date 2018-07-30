window.onload = function scroll () {
    var windows = $(window).width();
    if ( windows < 414 ) {
$(function() {

	$.scrollify({
		section:".panel",
		scrollSpeed:500,
		after:function(i) {
		}
	});

});
    }
}



