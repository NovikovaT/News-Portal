let sliderCount = 0;
document.addEventListener('DOMContentLoaded', function(){
	let arr = [
		'http://ffcu.io/wp-content/uploads/2015/12/msp_1405_1378.jpg',
		'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg',
		'https://www.hd-wallpapersdownload.com/script/bulk-upload/stock-photos-for-free-use-hd-wallpaper.jpg',
		'https://thumbor.forbes.com/thumbor/960x0/smart/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1005983644%2F960x0.jpg%3Ffit%3Dscale'
	];

	let slider = document.getElementsByClassName('slider-wrapper');
	let rightButton = document.getElementById('right-button');
	let leftButton = document.getElementById('left-button');

	rightButton.addEventListener('click', function() {
		if (sliderCount==arr.length - 1) {
			sliderCount=0;
		} else {
			sliderCount++;
		};
		
		let img = document.getElementById('img');
		img.src = arr[sliderCount];
		
	});
	
	leftButton.addEventListener('click', function() {
		if (sliderCount == 0) {
			sliderCount = arr.length - 1;
		} else {
			sliderCount--;
		};

		let img = document.getElementById('img');
		img.src = arr[sliderCount];
	});
});