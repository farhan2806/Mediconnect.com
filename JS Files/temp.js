let add = "sahara vihar,kasimpara, bilaspur"
const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${add}&language=en`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ce5b805dc2msh2749391c7ed5192p176144jsn372ee7e4a6c7',
    'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
  }
};
let latitude=0
let longitude=0
try {
  const response = await fetch(url, options);
  const result = await response.text();
  // console.log(result);
  let data = JSON.parse(result);

  // Access the latitude and longitude values
  latitude = data.results[0].location.lat;
  longitude = data.results[0].location.lng;

  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
} catch (error) {
  console.error(error);
}

// ................the location code ends here.......................

// In the hospitals array the 1.lattitude 2. longitude 3.Hospital name 4. phone number

let hospitals = [[38.7588, 45.4060, "Apollo Hospital", "8839582124"],
[40.7841, 35.2143, "Railway Hospital", "8839582124"],
[37.2564, 34.2548, "Chepok Hospital", "8839582124"],
[22.1269, 82.1816, "AIIMS Hospital","8839582124"]]


// ................Calculation for the distance.............

function distance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance;
}

function findNearestHospital(userLat, userLng, hospitals) {
  let minDistance = Infinity;
  let nearestHospital = null;

  for (let i = 0; i < hospitals.length; i++) {
      let hospitalLat = hospitals[i][0];
      let hospitalLng = hospitals[i][1];
      let dist = distance(userLat, userLng, hospitalLat, hospitalLng);
      console.log(`Hospital: ${hospitals[i][2]}, Distance: ${dist} km`);
      if (dist < minDistance) {
          minDistance = dist;
          nearestHospital = hospitals[i];
      }
  }

  return nearestHospital;
}

// Output the nearest hospital and its information
let nearestHospital = findNearestHospital(latitude, longitude, hospitals);
console.log("Nearest Hospital:", nearestHospital[2]);
console.log("Contact Number:", nearestHospital[3]);
// console.log("Distance:", minDistance.toFixed(2), "kilometers");



