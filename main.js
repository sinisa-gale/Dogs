var selector = document.querySelector('select');
var dogBreed = selector.value;

var selectChange = function(e) {
	clearInterval(timer);
	dogBreed = e.target.value;
	var timer = setInterval(requestHttp, 5000);
}

var changeImage = function (imageSrc) {
	var imgElement = document.querySelector('img');
	if (imgElement) {
		imgElement.setAttribute('src', imageSrc);
	} else {
		var imgElem = document.createElement('img');
		imgElem.setAttribute('src', imageSrc);
		document.querySelector('.image-container').appendChild(imgElem);
	}
}

function requestHttp() {
  var req = new XMLHttpRequest();
  req.open("GET", "https://dog.ceo/api/breed/" + dogBreed + "/images/random");
	req.onload = function () {
		console.log(req);
	}
  req.send();

}

selector.addEventListener('change', selectChange);
