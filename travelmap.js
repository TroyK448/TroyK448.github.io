// 35.6762° N latitude and 139.6503° E longitude
var coordinates = [35.6762, 139.6503];
var place1 = [35.6594, 139.7006];
var place2 = [34.6937, 135.5022];
var place3 = [35.0117, 135.7682];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Tokyo!</p>").addTo(map);
var marker1 = L.circle(place1, {color: "black", fillColor: "#8b008b", radius: 150}).bindPopup("<p>Hello, from Shibuya!</p>").addTo(map); 
var marker2 = L.circle(place2, {color: "black", fillColor: "#0000ff", radius: 150}).bindPopup("<p>Hello, from Osaka!</p>").addTo(map);
var marker3 = L.circle(place3, {color: "black", fillColor: "#e34234", radius: 150}).bindPopup("<p>Hello, from Kyoto!</p>").addTo(map);
