(function() {

var jQuery;

if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
	var script_tag = document.createElement('script');
	script_tag.setAttribute("type", "text/javascript");
	script_tag.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");

	if (script_tag.readyState) {
		script_tag.onreadystatechange = function (){ //Specific for old versions of IE
			if (this.readyState == 'complete' || this.readyState == 'loaded') {
				scriptLoadHandler();
			}
		};
	} else { //Other browsers use this
		script_tag.onload = scriptLoadHandler;
	}

	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
	jQuery = window.jQuery;
	main();
}

function scriptLoadHandler() {
	jQuery = window.jQuery.noConflict(true);
	main();
}

function main(){
	jQuery(document).ready(function($){
		//jQuery 1.4.2 is ready here
		console.log("Widget loaded!");
	});
}

})(); //Define and call the anonymous wrapper function immediately