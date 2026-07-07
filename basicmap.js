// 35.2271° N latitude and -80.8431° W longitude
var charlotte = [35.2271, -80.8431];
var cpcc = [35.21, -80.83]
var map = L.map('map').setView(charlotte, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var cpccmarker = L.marker(cpcc,{title:"CPCC Central Campus"}).bindPopup(
    "<h4>CPCC Central Campus</h4><br><a href='https://www.cpcc.edu'>visit cpcc.edu</a><br><iframe src='https://www.cpcc.edu' width='30%' height:'100px'></iframe>"
).addTo(map);
