// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});

/*The above configuration steps have been completed for you.
Your only task before creating the functionality for each section below is to add 
your API key from http://openweathermap.org*/




// TODO: create a function that logs the city entered in the form

//submit-city is the id from the submit button
$("#submit-city").click(function(){

  let city = $("#inputCity").val()

  //use link below that grabs weather info from the open weather API
  let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`

  $.get(URL, function(data){

    console.log(data.main);
    
            // initialize the variables to the array in the list of tables from weather API, .temp will go into specific array
            let hightemp = data.main.temp_max
            let lowtemp = data.main.temp_min
            let forecast = data.weather[0].main
            let humidity = data.main.humidity

            $("#hightemp").append(`${hightemp}`)
            $("#lowtemp").append(`${lowtemp}`)
            $("#forecast").append(`${forecast}`)
            $("#humidity").append(`${humidity}`)

})
})

  // TODO: add AJAX call to weather API and display info

//TODO: check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()

// TODO: make search information not appear until they submit a city
//HINT: You will need to use CSS and JQuery to do this


