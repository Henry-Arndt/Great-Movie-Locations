document.addEventListener('DOMContentLoaded', function() {

var map = L.map('map').setView([34, -118], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/htarndt/cj1y8zfng00092soxyr5z8sj3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaHRhcm5kdCIsImEiOiJjaXkyY2c2OXkwMDFsMnFwaWlyY2hiMTYzIn0.4mK81XJf357VHjLH_qc_VQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 24
}).addTo(map);
var imageUrl = 'http://i1376.photobucket.com/albums/ah35/htarndt/los_angeles_best_picture_heat_map_zps9lx7wmto.jpg',
    imageBounds = [
          [32, -116],
            [36, -120]
                       ];

function showLatLng(e) {
    document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);
var robinHood = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
          [
            [
              -0.6064581871032715,
              51.41396939184986
            ],
            [
              -0.5983686447143555,
              51.413032578215365
            ],
            [
              -0.5967807769775391,
              51.41334039052711
            ],
            [
              -0.5990338325500488,
              51.41367496677616
            ],
            [
              -0.6019735336303711,
              51.41619090172835
            ],
            [
              -0.606844425201416,
              51.41241694737439
            ],
            [
              -0.6093549728393555,
              51.41230988029495
            ],
            [
              -0.6084537506103516,
              51.414678680831805
            ],
            [
              -0.6062865257263184,
              51.414638532692685
            ],
            [
              -0.6071233749389648,
              51.41154702009611
            ],
            [
              -0.5985832214355468,
              51.41114550961557
            ],
            [
              -0.5982828140258789,
              51.41367496677616
            ],
            [
              -0.6064581871032715,
              51.41396939184986
            ]
          ]
        ]
            }
    }
  ]
}
L.geoJSON(robinHood).addTo(map);
document.getElementById("blackNinja").onclick = function () {
    map.setView([35.683, 10.096], 16);
};
document.getElementById("harryPotter").onclick = function () {
    map.setView([51.843, -2.25], 16);
};
document.getElementById("robinHood").onclick = function () {
    map.setView([51.412, -0.602], 16);
};
document.getElementById("jurassicPark").onclick = function () {
    map.setView([8.706, -83.8855], 16);
};
map.doubleClickZoom.disable();
L.imageOverlay(imageUrl, imageBounds).addTo(map);
var x = document.getElementById("blackNinja");
x.addEventListener("mouseover", ninjaFunction);


function ninjaFunction() {
    document.getElementById("ninja").innerHTML += "The Black Ninja Scene:<br>"
}
var y = document.getElementById("harryPotter");
y.addEventListener("mouseover", harryFunction);


function harryFunction() {
    document.getElementById("fluffy").innerHTML += "Meet Fluffy Scene:<br>"
}
var z = document.getElementById("robinHood");
z.addEventListener("mouseover", robinFunction);


function robinFunction() {
    document.getElementById("robinShip").innerHTML += "Row Me Bully Boys Scene:<br>"
}
var k = document.getElementById("jurassicPark");
k.addEventListener("mouseover", jurassicFunction);


function jurassicFunction() {
    document.getElementById("jurassicOpening").innerHTML += "SHOOT HER:<br>"
}
L.esri.dynamicMapLayer({
    url: "https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer",
    opacity: .5
}).addTo(map);
var point = [34.77, -118.2];
var marker = L.circleMarker(point);
marker.bindPopup('<b>This is the place where most of the Best Picture Films are</b><br> See the Link at the Bottom of the Page');
marker.addTo(map);
});