$(document).ready( function() {
$(".page-content ul li").hover (
	function() {
		var imageName = $(this).text();
		//var processedImageName = getProcessedImageName(imageName);
		applyEffect($(".page-content p img"), '../images/house-stark.png');
	}, 
	function(){
		applyEffect($(".page-content p img"), "../images/default.png");
	});
});

function applyEffect(image, path) {
	image.hide();
	image.fadeIn(200);
	image.attr('src', path);
} 