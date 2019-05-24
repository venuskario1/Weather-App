# This is a weather app that allows you to submit a city name and get feedback on the high and low temperatures.

# We use the OPEN Weather Map API link to grab a hold of this data using JQuery and the API key provided to us

# We then initialize variables that we call in our JQUery as .append() and set them equal to the array of data from the API


# For example, see below for the high temp.

# let hightemp = data.main.temp_max

# $("#hightemp").append(`${hightemp}`)

# <div class="card-title badge-danger" id="ht">High Temp</div> #<div class="card-text" id="hightemp"></div>