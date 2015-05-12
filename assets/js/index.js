(function() {
		var init = function($)
		{

			$('#map-content').css("display","none");

			/* Shrink map for small screens */
			if ($("#content").width() <= 400) {
				$("#map-canvas").css("height","280px");
				$("table.data").css("margin","10px 0 0 0");
			}

			/*	Content */
			var locations = [
				["Panjab University", 30.760619,76.765392, $("#map-content #panjabContent").html(), "panjab"],
				["Tata Institute of Fundamental Research", 18.906629,72.805206, $("#map-content #tataContent").html(), "tata"],
				["Indian Association for the Cultivation of Science", 22.49894,88.368824, $("#map-content #iacsContent").html(), "iacs"],
				["Council of Scientific and Industrial Research (CSIR)", 28.618146,77.211917, $("#map-content #csirNDContent").html(), "csirND"],
				["Indian Institute of Technology (IIT)", 26.192902,91.695063, $("#map-content #iitGContent").html(), "iitG"],
				["Indian Institute of Science Bangalore", 13.02186,77.567142, $("#map-content #iisBContent").html(), "iisB"],
				["Indian Institute of Technology (IIT)", 19.13343,72.913268, $("#map-content #iitBContent").html(), "iitB"],
				["Council of Scientific and Industrial Research (CSIR)", 19.124793,72.834562, $("#map-content #csirMContent").html(), "csirM"],
				["Indian Institute of Technology (IIT)", 22.314927,87.310531, $("#map-content #iitKContent").html(), "iitK"],
				["Indian Institute of Technology (IIT)", 12.992329,80.23684, $("#map-content #iitMContent").html(), "iitM"]
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
				
				/*	Array to hold markers */
				var markers = [];

				/* Table buttons */
				var buttons = $(".outer-wrapper button");

				for (var i = 0; i < locations.length; i++) {  
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(locations[i][1], locations[i][2]),
						map: map,
						title: locations[i][0]
					});
					markers.push(marker);
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

				/* Call infoWindow with relevant content on button click */
				buttons.click(function () {
					var name = $(this).attr("id");

					for (var y = 0; y < locations.length; y++) {
						if (name == locations[y][4]) {
							infoWindow.setContent(locations[y][3]);
							infoWindow.open(map, markers[y]);
						}
					}
				});

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