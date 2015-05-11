(function() {
		var init = function($)
		{

			$('#map-content').css("display","none");

			/*	Content */
			var locations = [
				["panjabUniversity", 30.760619,76.765392, $("#map-content #panjabContent").html()],
				["csir", 28.618146,77.211917, $("#map-content #csirContent").html()],
				["iitG", 26.192902,91.695063, $("#map-content #iitGContent").html()],
				["iacs", 22.49894,88.368824, $("#map-content #iacsContent").html()],
				["iisb", 13.02186,77.567142, $("#map-content #iisbContent").html()],
				["tata", 18.906629,72.805206, $("#map-content #tataContent").html()]
			];

			function initialize() {
				
				var centerLatlng = new google.maps.LatLng(22,80);

				var mapOptions = {
					center: centerLatlng,
					zoom:4
				};
				
				var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

				/*	InfoWindow */
				var infoWindow = new google.maps.InfoWindow({
					maxWidth: 350
				});

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