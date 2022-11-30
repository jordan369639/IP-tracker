let Ip = document.getElementById("ip");
let city = document.getElementById("location");
let timezone = document.getElementById("timezone");
let isp = document.getElementById("isp");
let input = document.getElementById("input-area");
let search = document.getElementById("search-btn");
const validIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

let apikey = "at_CEOrQ3XKSVhACf802l7RMF53tD1Uv";
let apiserver = "https://geo.ipify.org/api/v2/country,city?apiKey=at_CEOrQ3XKSVhACf802l7RMF53tD1Uv&ipAddress=";
let lattitude = 0;
let longitude = 0;





document.addEventListener('keydown', (e) => {
    if(e.keyCode === 13 || e.key == "Enter" || e.code == "Enter"){
        search.click();
    }
})








search.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validIP.test(input.value)){
        
        getdetail(input.value);
    }else{
        input.value = ''
       input.placeholder = 'Invalid  IP Address...';
      

    }
    
    
    
})

function getdetail(ip){
    input.value = "";
    input.placeholder = 'Loading...';
    
fetch(apiserver+ip).then(res => res.json()).then(result=>{

lattitude = result.location["lat"];
longitude = result.location["lng"];
console.log(lattitude+"    "+longitude)
city.innerHTML = result.location["city"]
timezone.innerHTML = result.location["timezone"];
Ip.innerHTML = result["ip"];
updatedetail(lattitude,longitude);



})


}

function updatedetail(lattitude,longitude){
document.getElementById("container").innerHTML = "<div id= 'map' ></div>";

input.placeholder = 'Search for any IP address';
    var map = L.map('map').setView([lattitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([lattitude, longitude]).addTo(map);
  
    
}

















