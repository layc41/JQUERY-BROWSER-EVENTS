$(document).ready(function () {
    // initial load
    $('#akronInfoDiv').hide();
    $('#minneapolisInfoDiv').hide();
    $('#louisvilleInfoDiv').hide();

    // main tab
    $('#mainButton').on('click', function () {
        $('#mainInfoDiv').show();
        $('#louisvilleInfoDiv').hide();
        $('#akronInfoDiv').hide();
        $('#minneapolisInfoDiv').hide();
    })
    
    // akron tab
    $('#akronButton').on('click', function () {
        $('#akronInfoDiv').show();
        $('#akronWeather').hide();
        $('#mainInfoDiv').hide();
        $('#minneapolisInfoDiv').hide();
        $('#louisvilleInfoDiv').hide();
    })

    $('#akronWeatherButton').on('click', function () {
        $('#akronWeather').toggle();
    })
    
    // minneapolis tab
    $('#minneapolisButton').on('click', function () {
        $('#minneapolisInfoDiv').show();
        $('#minneapolisWeather').hide();
        $('#akronInfoDiv').hide();
        $('#mainInfoDiv').hide();
        $('#louisvilleInfoDiv').hide();
    })

    $('#minneapolisWeatherButton').on('click', function () {
        $('#minneapolisWeather').toggle();
    })
    
    // louisville tab
    $('#louisvilleButton').on('click', function () {
        $('#louisvilleInfoDiv').show();
        $('#louisvilleWeather').hide();
        $('#akronInfoDiv').hide();
        $('#mainInfoDiv').hide();
        $('#minneapolisInfoDiv').hide();
    })

    $('#louisvilleWeatherButton').on('click', function () {
        $('#louisvilleWeather').toggle();
    })

    $("tr").not(':first').hover(
        
        // in callback
        function () {
        $(this).css("background-color", "WhiteSmoke");
        },

        // out callback
        function () {
        $(this).css("background-color", "");
        }
    )

});