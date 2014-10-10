(function() {
		var init = function($)
		{

		$('#map-content').css("display","none");

		/*	Content strings */
		var boulderString = $("#map-content #boulderContent").html();
		var cambridgeString = $("#map-content #cambridgeContent").html();
		var stockholmString = $("#map-content #stockholmContent").html();
		var singaporeString = $("#map-content #singaporeContent").html();
		var genevaString = $("#map-content #genevaContent").html();
		var pittsburghString = $("#map-content #pittsburghContent").html();
		var newYorkString = $("#map-content #newYorkContent").html();
		var huntsvilleString = $("#map-content #huntsvilleContent").html();
		var auroraString = $("#map-content #auroraContent").html();
		var berkeleyString = $("#map-content #berkeleyContent").html();
		var sanFranciscoString = $("#map-content #sanFranciscoContent").html();
		var rockvilleString = $("#map-content #rockvilleContent").html();


		function initialize() {
			
			var myLatlng = new google.maps.LatLng(24.4571832,-10);

			var mapOptions = {
				center: myLatlng,
				zoom:2
			};
			
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			/*	Locations */
			var boulderLatLng = new google.maps.LatLng(40.0075471,-105.2622306);
			var cambridgeLatLng = new google.maps.LatLng(52.174806,0.134048);
			var stockholmLatLng = new google.maps.LatLng(59.348148,18.023658);
			var singaporeLatLng = new google.maps.LatLng(1.352083,103.819836);
			var genevaLatLng = new google.maps.LatLng(46.2221721,6.1482593);
			var pittsburghLatLng = new google.maps.LatLng(40.442492,-79.942553);
			var newYorkLatLng = new google.maps.LatLng(42.453449,-76.473503,15);
			var huntsvilleLatLng = new google.maps.LatLng(34.7303688,-86.5861037);
			var auroraLatLng = new google.maps.LatLng(39.74486,-104.839997);
			var berkeleyLatLng = new google.maps.LatLng(37.871899,-122.25854);
			var sanFranciscoLatLng = new google.maps.LatLng(37.763013,-122.458833);
			var rockvilleLatLng = new google.maps.LatLng(39.103305,-77.198118);

			/*	InfoWindow */
			var infoWindow = new google.maps.InfoWindow({
				content: boulderString,
				maxWidth: 300
			});

			/*	Markers */
			var boulderMarker = new google.maps.Marker({
				position: boulderLatLng,
				map: map,
				title: 'boulder'
			});
			var cambridgeMarker = new google.maps.Marker({
				position: cambridgeLatLng,
				map: map,
				title: 'cambridge'
			});
			var stockholmMarker = new google.maps.Marker({
				position: stockholmLatLng,
				map: map,
				title: 'stockholm'
			});
			var singaporeMarker = new google.maps.Marker({
				position: singaporeLatLng,
				map: map,
				title: 'singapore'
			});
			var genevaMarker = new google.maps.Marker({
				position: genevaLatLng,
				map: map,
				title: 'geneva'
			});
			var pittsburghMarker = new google.maps.Marker({
				position: pittsburghLatLng,
				map: map,
				title: 'pittsburgh'
			});
			var newYorkMarker = new google.maps.Marker({
				position: newYorkLatLng,
				map: map,
				title: 'newYork'
			});
			var huntsvilleMarker = new google.maps.Marker({
				position: huntsvilleLatLng,
				map: map,
				title: 'huntsville'
			});
			var auroraMarker = new google.maps.Marker({
				position: auroraLatLng,
				map: map,
				title: 'aurora'
			});
			var berkeleyMarker = new google.maps.Marker({
				position: berkeleyLatLng,
				map: map,
				title: 'berkeley'
			});
			var sanFranciscoMarker = new google.maps.Marker({
				position: sanFranciscoLatLng,
				map: map,
				title: 'sanFrancisco'
			});
			var rockvilleMarker = new google.maps.Marker({
				position: rockvilleLatLng,
				map: map,
				title: 'rockville'
			});

			/*	event listeners */
			google.maps.event.addListener( boulderMarker, 'click', function () {
				infoWindow.setContent(boulderString);
				infoWindow.open(map, boulderMarker);
			});
			google.maps.event.addListener( cambridgeMarker, 'click', function () {
				infoWindow.setContent(cambridgeString);
				infoWindow.open(map, cambridgeMarker);
			});
			google.maps.event.addListener( stockholmMarker, 'click', function () {
				infoWindow.setContent(stockholmString);
				infoWindow.open(map, stockholmMarker);
			});
			google.maps.event.addListener( singaporeMarker, 'click', function () {
				infoWindow.setContent(singaporeString);
				infoWindow.open(map, singaporeMarker);
			});
			google.maps.event.addListener( genevaMarker, 'click', function () {
				infoWindow.setContent(genevaString);
				infoWindow.open(map, genevaMarker);
			});
			google.maps.event.addListener( pittsburghMarker, 'click', function () {
				infoWindow.setContent(pittsburghString);
				infoWindow.open(map, pittsburghMarker);
			});
			google.maps.event.addListener( newYorkMarker, 'click', function () {
				infoWindow.setContent(newYorkString);
				infoWindow.open(map, newYorkMarker);
			});
			google.maps.event.addListener( huntsvilleMarker, 'click', function () {
				infoWindow.setContent(huntsvilleString);
				infoWindow.open(map, huntsvilleMarker);
			});
			google.maps.event.addListener( auroraMarker, 'click', function () {
				infoWindow.setContent(auroraString);
				infoWindow.open(map, auroraMarker);
			});
			google.maps.event.addListener( berkeleyMarker, 'click', function () {
				infoWindow.setContent(berkeleyString);
				infoWindow.open(map, berkeleyMarker);
			});
			google.maps.event.addListener( sanFranciscoMarker, 'click', function () {
				infoWindow.setContent(sanFranciscoString);
				infoWindow.open(map, sanFranciscoMarker);
			});
			google.maps.event.addListener( rockvilleMarker, 'click', function () {
				infoWindow.setContent(rockvilleString);
				infoWindow.open(map, rockvilleMarker);
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
