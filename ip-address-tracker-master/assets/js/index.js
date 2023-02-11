const API_KEY = 'at_tdHgLbDeMUCYV4JEHY8nvqADQCtZC'; // this is pain
const BASE_URL = 'https://geo.ipify.org/api/v2/country';
const CENTER = [51.505, -0.09];

async function geoAPI(address) {
  let url = `${BASE_URL}?apiKey=${API_KEY}`;
  url = url.concat(`&ipAddress=${address}`);
  console.log(url);
  const request = await fetch(url);

  const data = await request;
  return data.json();
}

async function getLocation(value) {
  //TODO input validatoin
  const data = await geoAPI(value);

  console.log(data);
}

/* search listeners */
const query = document.getElementById('query');
const button = document.getElementById('button-addon');

button.addEventListener('click', () => {
  getLocation(query.value);
});

/* on page load events */

function mapLoad(center = CENTER) {
  const map = L.map('map', {
    center: center,
    zoom: 13
  });
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}