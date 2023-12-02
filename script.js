L.mapquest.key = 'kyhR99Cqw343ehXa2yjNIbAjdpylrnCE';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});