(function() {
		var init = function($)
		{

			$('#map-content').css("display","none");

			/*	Content */
			var locations = [
				["boulder", 40.0075471,-105.2622306, $("#map-content #boulderContent").html()],
				["cambridge", 52.174806,0.134048, $("#map-content #cambridgeContent").html()],
				["stockholm", 59.348148,18.023658, $("#map-content #stockholmContent").html()],
				["singapore", 1.352083,103.819836, $("#map-content #singaporeContent").html()],
				["geneva", 46.2221721,6.1482593, $("#map-content #genevaContent").html()],
				["pittsburgh", 40.442492,-79.942553, $("#map-content #pittsburghContent").html()],
				["newYork", 42.453449,-76.473503, $("#map-content #newYorkContent").html()],
				["huntsville", 34.7303688,-86.5861037, $("#map-content #huntsvilleContent").html()],
				["aurora", 39.74486,-104.839997, $("#map-content #auroraContent").html()],
				["berkeley", 37.871899,-122.25854, $("#map-content #berkeleyContent").html()],
				["sanFrancisco", 37.763013,-122.458833, $("#map-content #sanFranciscoContent").html()],
				["rockville", 39.103305,-77.198118, $("#map-content #rockvilleContent").html()]
			];

			function initialize() {
				
				var centerLatlng = new google.maps.LatLng(24.4571832,-10);

				var mapOptions = {
					center: centerLatlng,
					zoom:2
				};
				
				var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

				/*	InfoWindow */
				var infoWindow = new google.maps.InfoWindow({});

				/*	=================
					http://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example/3059129#3059129 
					=================
				*/
				
				/*	Markers */
			    var marker, i;

				for (i = 0; i < locations.length; i++) {  
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(locations[i][1], locations[i][2]),
						map: map,
						title: locations[i][0]
					});

					addEventListener(marker, i);
				}

				/*	Event listeners */
				function addEventListener (marker, i) {
					google.maps.event.addListener(marker, 'click', function(marker, i) {
						return function () {
							infoWindow.setContent(locations[i][3]);
							infoWindow.open(map, marker);
						};
					}(marker, i));
				}
			}

			initialize();

		};


	setTimeout(function()
	{
	if (typeof jQuery !== 'undefined')
	{
		init(jQuery);
	} else
	{
		setTimeout(arguments.callee, 60);
	}
	}, 60);

})();