var weatherData = {};
$(document).ready(function($){

$('#click').on('click', getWeather);//controls button
var baseUrl = 'https://api.forecast.io/forecast/';
function buildUrl(lat, lon){
      return baseUrl + apiKey+'/'+lat+','+lon;

    }

//grabbing weatherData
function getWeather(){
     $('#click').fadeOut();//Make button go byebye
   var options = {
     url: buildUrl(geoplugin_latitude(), geoplugin_longitude()),
     dataType: 'jsonp',
     success: showData,
     error: errorHandler
   };

   $.ajax(options);

}


function errorHandler(err){
    console.log(err);
}
function whatYouDo(icon){
     var compare = icon;

     console.log(compare);
     if( compare === 'clear-day'){

          return "Go on a picnic or someting!";
     }
     else if(compare === 'clear-night'){

           return "Stare at the night sky mabey find meaning in your pathetic life.";

     }
     else if(compare === 'cloudy'){
           return 'Im drinking, good luck with your life.';
     }
     else if(compare === 'fog'){
            return 'Stay inside, there might be some silent hill type mess outside.';
     }
     else if(compare === "partly-cloudy-night"){
             return 'It s a wonderfull night for a moondance.... NOT!';
     }
     else if (compare === 'partly-cloudy-day'){
              return 'Get your camera out its a good day to shoot for NatGeo!';
     }
     else if(compare === 'rain'){
              return 'Netflix and chill, Hulu and commitent, or Youtube and saddness';
     }
     else if(compare === 'sleet'){
              return '....F@&# That.'
     }
     else if (compare === 'snow'){
           return 'Is snowboarding considered one word?'
     }
     else if( compare === 'wind'){
            return 'Outside? Never heard of it.'
     }
     else {
           return "idk Bro";
     }



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
          temp: data.currently.temperature,
          todo: whatYouDo(data.currently.icon),
        };
        var html = template(data);
        $('#output').html(html);



    };






});
