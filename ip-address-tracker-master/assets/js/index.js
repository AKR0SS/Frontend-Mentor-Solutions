const API_KEY = 'at_tdHgLbDeMUCYV4JEHY8nvqADQCtZC'; // this is pain
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';
const CENTER = [51.505, -0.09];

async function geoAPI(address) {
  let url = `${BASE_URL}?apiKey=${API_KEY}`;
  url = url.concat(`&ipAddress=${address}`);

  let request;

  try {
    request = await fetch(url);
  } catch (e) {
    console.log(e + '\nThis may have been caused by your Ad block sorryyy');
    return;
  }

  const data = await request;
  return data.json();
}

async function getLocation(value) {
  //   TODO input validatoin
  const data = await geoAPI(value);

  document.getElementById('ip-address').innerHTML = value;
  document.getElementById('location').innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
  document.getElementById('timezone').innerHTML = `UTC ${data.location.timezone}`;
  document.getElementById('isp').innerHTML = data.as.name;

  mapLoad([data.location.lat, data.location.lng]);
}

/* search listeners */
const query = document.getElementById('query');
const button = document.getElementById('button-addon');

button.addEventListener('click', () => {
  getLocation(query.value);
});

/* on page load events */
let map;


function mapLoad(center = CENTER) {
  if (!map) {
    map = L.map('map', {
      center: center,
      zoom: 13
    });
  } else {
    map.setView(center, 13);
  }

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(center).addTo(map);
}