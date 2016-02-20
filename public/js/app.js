$('#click').on('click', showData);

function showData(){
    var source= $('#weatherStuff').html();
    var template= Handlebars.compile(source);
    var data ={
      lat: 100,
      lon: 200,
      summary: "testing",
      time: "12:00"
    };
    var html = template(data);
    $('#output').html(html);

};
