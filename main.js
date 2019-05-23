/* This is the main JS file for this web app */

/* Global Variables */
var imageList = [];
var titleList = [];
var subtitleList = [];
var ambassadorDataExists = false;

/* Function to pull partner data */
function ambassadorData(partnerData){
	for(var i=3; i<partnerData.feed.entry.length; i+=3){
		imageList.push(partnerData.feed.entry[i].gs$cell.$t);
		titleList.push(partnerData.feed.entry[i+1].gs$cell.$t);
		subtitleList.push(partnerData.feed.entry[i+2].gs$cell.$t);
	}
	ambassadorDataExists = true;
}

/* Function to render ambassador data */
function renderAmbassadorData(){
	document.getElementById('ambassador_data_container').innerHTML = '';
	for(var i=0; i<imageList.length; i++){
		document.getElementById('ambassador_data_container').innerHTML += '<div class="col s12 m12 l4 xl4 center-align" style="min-height:256px;"><img src="'+imageList[i]+'" alt="Unable to load image" class="reponsive-img circle" /><br /><b style="margin-left:5px;">'+titleList[i]+'</b><br /><p>'+subtitleList[i]+'</p></div>';
	}
}

/* Main thread */
window.onload = function () {

	/* Set date */
	document.getElementById('footer_year').innerHTML = new Date().getFullYear();

	/* Initialize Firebase */
	firebase.initializeApp({
		apiKey: "AIzaSyCpxwZ3QGzKjzLVSm94Uqqz-5BnvxzrUts",
		authDomain: "yogi-run.firebaseapp.com",
		databaseURL: "https://yogi-run.firebaseio.com",
		projectId: "yogi-run",
		storageBucket: "yogi-run.appspot.com",
		messagingSenderId: "267127157989",
		appId: "1:267127157989:web:78b7c4c0dc76bfcd"
	});

	/* Register a Service Worker */
	if('serviceWorker' in navigator) {
	    navigator.serviceWorker
            .register('sw.js')
            .then(function() { console.log("%cService Worker Registered!", "background:#222222; color:#BADA55;"); });
	}
	
	/* Render pulled data */
	if(ambassadorDataExists){
		renderAmbassadorData();
	}
	else{
		setTimeout(function(){
			renderAmbassadorData();
		}, 3000);
	}

}
