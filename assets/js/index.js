(function() {
		var init = function($)
		{

			$('#map-content').css("display","none");

			/*	Content */
			var locations = [
				["Panjab University", 30.760619,76.765392, $("#map-content #panjabContent").html()],
				["Tata Institute of Fundamental Research", 18.906629,72.805206, $("#map-content #tataContent").html()],
				["Indian Association for the Cultivation of Science", 22.49894,88.368824, $("#map-content #iacsContent").html()],
				["Council of Scientific and Industrial Research (CSIR)", 28.618146,77.211917, $("#map-content #csirNDContent").html()],
				["Indian Institute of Technology (IIT)", 26.192902,91.695063, $("#map-content #iitGContent").html()],
				["Indian Institute of Science Bangalore", 13.02186,77.567142, $("#map-content #iisbContent").html()],
				["Indian Institute of Technology (IIT)", 19.13343,72.913268, $("#map-content #iitBContent").html()],
				["Council of Scientific and Industrial Research (CSIR)", 19.124793,72.834562, $("#map-content #csirMContent").html()],
				["Indian Institute of Technology (IIT)", 22.314927,87.310531, $("#map-content #iitBContent").html()],
				["Indian Institute of Technology (IIT)", 12.992329,80.23684, $("#map-content #iitMContent").html()]
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