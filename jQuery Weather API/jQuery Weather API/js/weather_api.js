function ajaxCall(data)
{
    var result;
    $.ajax({
        url: getURL(data),
        type: 'POST',
        data: [],
        async: false,
        success: function (data) {
            result = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            result = jqXHR.responseJSON.message;
        }
    });
    return result;
}

function getWeatherByCityName(cityName) {
    return ajaxCall(cityName);
};

function getURL(city) {
    return "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7312787cc87e04d375dc4906a2c8a25e";
}