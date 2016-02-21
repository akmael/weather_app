var weatherData = {};
$(document).ready(function($){
$('#click').on('click', getWeather);//controls button
var baseUrl = 'https://api.forecast.io/forecast/';
console.log(geoplugin_countryName());
function buildUrl(lat, lon){
      return baseUrl + apiKey+'/'+lat+','+lon;

    }


//grabbing weatherData
function getWeather(){

   var options = {
     url: buildUrl(geoplugin_latitude(),geoplugin_longitude()),
     dataType: 'jsonp',
     success: showData,
     error: errorHandler
   };

   $.ajax(options);

}


function errorHandler(err){
    console.log(err);
}







//handlebars function to populate form
    function showData(data){
        var source= $('#weatherStuff').html();
        var template= Handlebars.compile(source);

        var data ={
          city: geoplugin_city(),
          lat: data.latitude,
          lon: data.longitude,
          icon: data.currently.icon,
          summary: data.currently.summary,
          time: moment().format('LT'),
          temp: data.currently.temperature
        };
        var html = template(data);
        $('#output').html(html);
        console.log(data);

    };






});
