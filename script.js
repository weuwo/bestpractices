

function whiteIndex() {
	document.getElementsByClassName("side-panel-toggle")[0].addEventListener("mouseover", event => {
		document.getElementsByClassName("side-panel")[0].style.background = "#fffff";
		console.log("hey");
	});
}



///// START  NEW CODE  ////
///// START  NEW CODE  ////
///// START  NEW CODE  ////

var currentVideoURL = "window0.html";
var foundObjectArray = [];


function checkIfYouWon(object) {
	currentObjectID = object;


	if (foundObjectArray.indexOf(currentObjectID) === -1) { // if object is not in foundObjectArray then continue
		foundObjectArray.push(currentObjectID); // add object.
	}

	if (foundObjectArray.length >= 9) { // if foundObjectArray has 9 objects then you win
		
		for (i=0; i <= 8; i++) {
		document.getElementsByClassName("popup-2")[i].addEventListener("click", toggleObjectWinScreen);
		}
		// toggleObjectWinScreen(); // Toggle Win Screen
	}
} // end checkIfYouWon

function toggleObjectWinScreen() {
	document.getElementById("popup-you-win").classList.toggle("active");
	console.log('hi');
}

function toggleRefresh() {
	var elem = document.getElementsByClassName("restart-button")[0];
	elem.style.display = "block";
}

function refreshProjection() {
	currentVideoURL = "window0.html";
	updateExternalWindow();
}

function setVideo(object) {
	var object = document.getElementById(object); // Get HTML Object which you clicked
	console.log(object);
	console.log(object.dataset);
	var videoURL = object.dataset.videourl; // Grab the data-videourl attribute and save it to this variable
	currentVideoURL = videoURL; // set currentVideoURL with new videoURL
	updateExternalWindow();
}

function togglePopup() {
	document.getElementById("popup").classList.toggle("active");
}

function updateExternalWindow() {
	window.open(currentVideoURL, 'popUpWindow', 'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}


///// START  END CODE  ////
///// START  END CODE  ////
///// START  END CODE  ////


function toggleObject1() {
	var popup = 'popup-1';///// NEW CODE  ////
	setVideo('object-1');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);

	document.getElementById("popup-1").classList.toggle("active");

	document.querySelector("img#object-1.object-all").style.display = "none";

	document.getElementById('object-1-text').innerHTML = '<h2>DIABLO BUS</h2>';

	document.getElementById('object-1-image').innerHTML = '<img src="object1.png" class="center" onclick="object1popup()">';

}

function object1popup() {
	document.getElementById("popup-1").classList.toggle("active");
}

function toggleObject2() {
	var popup = 'popup-2';///// NEW CODE  ////
	setVideo('object-2');///// NEW CODE  ////
	//console.log(object);
	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-2").classList.toggle("active");

	document.querySelector("img#object-2.object-all").style.display = "none";

	document.getElementById('object-2-text').innerHTML = '<h2>MR. SPIKE</h2>';

	document.getElementById('object-2-image').innerHTML = '<img src="object2.png" class="center" onclick="object2popup()">';

}

function object2popup() {
	document.getElementById("popup-2").classList.toggle("active");
}

function toggleObject3() {
	var popup = 'popup-3';///// NEW CODE  ////
	setVideo('object-3');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-3").classList.toggle("active");

	document.querySelector("img#object-3.object-all").style.display = "none";

	document.getElementById('object-3-text').innerHTML = '<h2>POKEMON SKATEBOARD</h2>';

	document.getElementById('object-3-image').innerHTML = '<img src="object3.png" class="center" onclick="object3popup()">';

}

function object3popup() {
	document.getElementById("popup-3").classList.toggle("active");
}

function toggleObject4() {
	var popup = 'popup-4';///// NEW CODE  ////
	setVideo('object-4');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);



	document.getElementById("popup-4").classList.toggle("active");

	document.querySelector("img#object-4.object-all").style.display = "none";

	document.getElementById('object-4-text').innerHTML = '<h2>LUCKY FROG</h2>';

	document.getElementById('object-4-image').innerHTML = '<img src="object4.png" class="center" onclick="object4popup()">';

}

function object4popup() {
	document.getElementById("popup-4").classList.toggle("active");
}

function toggleObject5() {
	var popup = 'popup-5';///// NEW CODE  ////
	setVideo('object-5');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-5").classList.toggle("active");

	document.querySelector("img#object-5.object-all").style.display = "none";

	document.getElementById('object-5-text').innerHTML = '<h2>GWUN YAM</h2>';

	document.getElementById('object-5-image').innerHTML = '<img src="object5.png" class="center" onclick="object5popup()">';

}

function object5popup() {
	document.getElementById("popup-5").classList.toggle("active");
}

function toggleObject6() {
	var popup = 'popup-6';///// NEW CODE  ////
	setVideo('object-6');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-6").classList.toggle("active");

	document.querySelector("img#object-6.object-all").style.display = "none";

	document.getElementById('object-6-text').innerHTML = '<h2>PINEAPPLE GUAVA</h2>';

	document.getElementById('object-6-image').innerHTML = '<img src="object6.png" class="center" onclick="object6popup()">';

}

function object6popup() {
	document.getElementById("popup-6").classList.toggle("active");
}

function toggleObject7() {
	var popup = 'popup-7';///// NEW CODE  ////
	setVideo('object-7');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-7").classList.toggle("active");

	document.querySelector("img#object-7.object-all").style.display = "none";

	document.getElementById('object-7-text').innerHTML = '<h2>CRYSTAL QUARTZ</h2>';

	document.getElementById('object-7-image').innerHTML = '<img src="object7.png" class="center" onclick="object7popup()">';

}

function object7popup() {
	document.getElementById("popup-7").classList.toggle("active");
}

function toggleObject8() {
	var popup = 'popup-8';///// NEW CODE  ////
	setVideo('object-8');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-8").classList.toggle("active");

	document.querySelector("img#object-8.object-all").style.display = "none";

	document.getElementById('object-8-text').innerHTML = '<h2>DIARY</h2>';

	document.getElementById('object-8-image').innerHTML = '<img src="object8.png" class="center" onclick="object8popup()">';

}

function object8popup() {
	document.getElementById("popup-8").classList.toggle("active");
}

function toggleObject9() {
	var popup = 'popup-9';///// NEW CODE  ////
	setVideo('object-9');///// NEW CODE  ////

	checkIfYouWon(popup);
	console.log(foundObjectArray);


	document.getElementById("popup-9").classList.toggle("active");

	document.querySelector("img#object-9.object-all").style.display = "none";

	document.getElementById('object-9-text').innerHTML = '<h2>AQUAPETS</h2>';

	document.getElementById('object-9-image').innerHTML = '<img src="object9.png" class="center" onclick="object9popup()">';

}

function object9popup() {
	document.getElementById("popup-9").classList.toggle("active");
}


function toggleSidePanel() {
	document.querySelector(".side-panel-toggle").addEventListener("click", () => {
		document.querySelector(".wrapper").classList.toggle("side-panel-open");
	});
}

var myScroll;

function loaded() {
	myScroll = new IScroll('#wrapper', {
		scrollX: true, scrollY: true,
		mouseWheel: true,
		indicators: [{
			el: document.getElementById('starfield1'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.4,
			speedRatioX: 0.4 /* Paralax Speeds */

		}, {
			el: document.getElementById('starfield2'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.15,
			speedRatioX: 0.15 

		}]
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
	capture: false,
	passive: false
} : false);

// ctrl + p to toggle window 2




function toggleWindow() {
	document.addEventListener('keypress', (event) => {
		if (event.key === 'p') {
			window.open(currentVideoURL, 'popUpWindow', 'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
		}
	})
}