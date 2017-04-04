
var mainWeather = {
      init : function(){
          $("#submitWeather").click(function () {
                    getWeather();
            }
        );
      },
 
    getWeather: function () {
        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput").val() + "," + $("#countryInput").val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                var wrapper = $("#WeatherWrapper");
                wrapper.empty();
                wrapper.append("<div class='city'> <p>Place: " + data.name + ", " + data.sys.country + "</p></div>");
                wrapper.append(mainWeather.createWeatherWidg(data));
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (data) {
        return "<div class='pressure'> <p>Temperature: " + (data.main.temp - 273.15).toFixed(2) + " C</p></div>"+
                "<div class='description'> <p>Title: " + data.weather[0].main + "</p></div>" +
                "<div class='description'> <p>Description: " + data.weather[0].description + "</p></div>" +
                "<div class='wind'> <p>Wind Speed: " + data.wind.speed + "</p></div>" +
                "<div class='humidity'> <p>Humidity: " + data.main.humidity + "%</p></div>" +
                "<div class='pressure'> <p>Pressure: " + data.main.pressure + " hpa</p></div>";
        "alert('hi');"
    }
}

/*
var temp;
console.log(temp);
var mainWeather1 = {
      init : function(){
          $("#submitWeather1").click(function () {
                    getWeather1();
                    getWeather2();
                    getWeather3();
                    getWeather4();
                    temp = temp / 4;
                    createWeatherWidg(temp);                    
            }
        );
      },
 
    getWeather1: function () {
        $.ajax({


            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput1").val() + "," + "india".val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                temp = temp + data.main.temp - 273.15;
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },

    getWeather2: function () {
        $.ajax({


            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput2").val() + "," + "india".val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                temp = temp + data.main.temp - 273.15;
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },

    getWeather3 function () {
        $.ajax({


            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput3").val() + "," + "india".val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                temp = temp + data.main.temp - 273.15;
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },

    getWeather4: function () {
        $.ajax({


            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $("#cityInput4").val() + "," + "india".val()+"&APPID=4cfa02c53d8bc59bd10527b2aab9226e",

            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                temp = temp + data.main.temp - 273.15;
            },
            error: function () {
                alert('Failed!');
            }
 
        });
    },
 
      
       createWeatherWidg: function (temp) {
        return "<div class='pressure'> <p>Temperature: " + (temp - 273.15).toFixed(2) + " C</p></div>";
    }
}
*/
//mainWeather.init();
$("#submitWeather").click(function () {
                    mainWeather.getWeather();
            });
/*
$("#submitWeather1").click(function () {
    console.log("hi2");  
                    mainWeather1.getWeather1();
            });*/
