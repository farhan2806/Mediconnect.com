// import Twilio from 'twilio';

// function sendsms(msg){
//     const accountSid = 'AC62084bbbcb9777b7e6496b5c58ffbd69';
// const authToken = '9ffa2f834dd8cc209c802292956d081d';

// // Create a new Twilio client with your credentials
// const client = new Twilio(accountSid, authToken);

// // Send an SMS message
// client.messages
//   .create({
//     body: msg,
//     from: '+12512946735',
//     to: '+918839582124'
//   })
//   .then(message => console.log('Message sent:', message.sid))
//   .catch(error => console.error('Error sending message:', error));
// }

console.log("connected")
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
      if (dist < minDistance) {
          minDistance = dist;
          nearestHospital = hospitals[i];
      }
  }

  return nearestHospital;
}

    function credentials(event) {
    event.preventDefault(); // Prevent the form from submitting
    const userAddress = document.getElementById('address').value;
    console.log("User Address:", userAddress);

    // Now, let's fetch the latitude and longitude of the user's address
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${userAddress}&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ce5b805dc2msh2749391c7ed5192p176144jsn372ee7e4a6c7',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0 && data.results[0].location) {
                const userLat = data.results[0].location.lat;
                const userLng = data.results[0].location.lng;
                console.log("User Latitude:", userLat);
                console.log("User Longitude:", userLng);

                // Now, let's find the nearest hospital
                let hospitals = [
                    [38.7588, 45.4060, "Apollo Hospital", "8839582124"],
                    [40.7841, 35.2143, "Railway Hospital", "8839582124"],
                    [37.2564, 34.2548, "Chepok Hospital", "8839582124"],
                    [22.1269, 82.1816, "AIIMS Hospital","8839582124"]
                ];

                let nearestHospital = findNearestHospital(userLat, userLng, hospitals);
                let dis_hos=distance(userLat,userLng,nearestHospital[0],nearestHospital[1])
                //   sendsms(`Hello user, the emergency service have been booked from your nearest hospital ${nearestHospital[2]} which is ${dis_hos}km away form your current location. It will arrive within ${Math.floor(dis_hos/40)} minutes.`)
                console.log("Nearest Hospital:", nearestHospital[2]);
                console.log("Contact Number:", nearestHospital[3]);
                console.log("The distance is:",dis_hos)
                displayPopup(nearestHospital[2],dis_hos);
            } else {
                console.error('Error: Unable to fetch location data.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    function displayPopup(hospitalName,distance) {
        // Fetching the pop-up element
        var popup = document.getElementById("popup");
    
        // Setting the hospital name dynamically
        var hospitalNameElement = document.getElementById("hospitalName");
        hospitalNameElement.textContent = "Booked from your nearest hospital: " + hospitalName + ". It will arrive in "+ Math.ceil(distance/40) + " minutes";
    
        // Displaying the pop-up
        popup.style.display = "block";
    
        // Hiding the pop-up after 5 seconds
        setTimeout(function () {
            popup.style.display = "none";
        }, 5000);
    }

document.querySelector('form').addEventListener('submit', credentials);

