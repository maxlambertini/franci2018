var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

var mail = [
	{"user" : "f.delucca3249a", "domain" : "ordpsicologier" },
	{"user" : "francesca.delucca", "domain" : "psypec" }
]

function dom(n) {
	var my_mail = "mailto:" +mail[n]["user"] + "@" + mail[n]["domain"]+".it";
	window.location.href = my_mail

}

function initmap() {
	// set up the map
	map = new L.Map('map-bibbiano');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 19, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(44.66416, 10.47328),16);
	map.addLayer(osm);

	//add popup
	var popup = L.popup()
		.setLatLng([44.66416, 10.47328])
		.setContent("<div class='popx'><b>Dott.ssa Francesca de Lucca</b><br>Tel. +393403946998</div>")
		.openOn(map);
}

function initmap2() {
	// set up the map
	map = new L.Map('map-casalecchio');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 19, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(44.4777258,11.276001),16);
	map.addLayer(osm);

	//add popup
	var popup = L.popup()
		.setLatLng([44.4777258,11.276001])
		.setContent("<div class='popx'><b>Dott.ssa Francesca de Lucca</b><br>Tel. +393403946998</div>")
		.openOn(map);
}

