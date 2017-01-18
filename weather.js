// $(document).ready(function() {
//     var unitsUsed;
//     $("#button".click(function() {
//         unitsUsed = $('#search').val()
//         console.log(unitsUsed)
//     }))
// });
console.log("I")
$(document).ready(function() {
    console.log("AM")
  var locationInput;
   $("#button").click(function() {
       console.log("HERE")
       locationInput = $('#search').val()
    //   console.log("locationInput")

    //   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ unitsUsed + locationInput + "&appid=b1b15e88fa797225412429c1c50c122a1", function(response) {
    //         console.log("Hello");
            
    //         // console.log(response.weather[0].description)
            
    //         // for (var i = 1; i++) {
    //         //   console.log(i);
    //         //   $("#weather-results").append();
            
    //     })
      }); 
  });