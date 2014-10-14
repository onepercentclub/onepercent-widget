(function() {

var jQuery;

if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.11.1') {
	var script_tag = document.createElement('script');
	script_tag.setAttribute("type", "text/javascript");
	script_tag.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");

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
	loadEmber();
	main();
}

function loadEmber() {
	var script_tag_ember = document.createElement('script');
	script_tag_ember.setAttribute("type", "text/javascript");
	script_tag_ember.setAttribute("src", "https://onepercentclub.com/static/assets/js/vendor/ember-v1.0.0.js");

	var script_tag_ember_data = document.createElement('script');
	script_tag_ember_data.setAttribute("type", "text/javascript");
	script_tag_ember_data.setAttribute("src", "https://onepercentclub.com/static/assets/js/vendor/ember-data-v0.14.js");	
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag_ember);
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag_ember_data);	
}

function main(){
	jQuery(document).ready(function($){
		function progressbar() {
			$('.slider-progress').each(function() {
		        var width = 0,
					sliderProgress = $(this);
		        	targetAmount = sliderProgress.data('target-amount'),
		        	donatedAmount = sliderProgress.data('donated-amount');

	        	sliderProgress.css('width', '0px');
		        if (parseInt(targetAmount) > 0) {
		        	if(parseInt(donatedAmount) >= parseInt(targetAmount)){
		        		width = 100;
		        	} else {
			            width = 100 * parseInt(donatedAmount) / parseInt(targetAmount);
		        	}
		            width += '%';
		        }
		        $(this).animate({'width': width}, 1000);
			})
		}

		function daysToGo() {
			$('.days-left').each(function() {
				var daysLeft = $(this).data('days-left');
				if (!daysLeft) {
				return null;
				}
				var now = new Date(),
					d = now.getDay(),
					m = now.getMonth(),
					y = now.getFullYear();
				console.log(daysLeft);
				$(this).find('strong').html('jhon');
				//debugger;
				//var microseconds = daysLeft.getTime() - now.getTime();
				//return Math.ceil(microseconds / (1000 * 60 * 60 * 24));
			});

		}

		setTimeout(function(){
			progressbar();
			daysToGo();
		}, 500);


		var el = $('div#widget-container');
		var id = $(el).data('id');
		var width = $(el).data('width') ? $(el).data('width') : 100;
		var height = $(el).data('height') ? $(el).data('height') : 80;
		var partner = $(el).data('partner')
		
		var jsonp_url = "http://localhost:8000/embed?callback=?&id=" + id + "&width=" + width + "&height=" + height +"&partner=" + partner;
		$.getJSON(jsonp_url, function(data){
			$('#widget-container').html(data.html);
		});
	});
}

})();
