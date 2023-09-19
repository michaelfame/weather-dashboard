   
    // API endpoint and API key
    const weatherAPIUrl = "https://api.openweathermap.org";
    const apiKey = "6f719abf6675d9374814e4051324543d";

    let queryUrl = `${weatherAPIUrl}/geo/1.0/direct?q=${search}&limit=5appid=${apiKey}`;
    
 // decalaring the variables for the search  inputs and form
    let searchInput = $("#search-input");
    let searchForm = $("#search-form");
    let searchHistoryContainer = $("#history");

    searchHistory.push(search);

    localStorage.setItem("search-history",JSON.stringify(searchHistory))
    renderSearchHistory()


    // function renderSearchHistory(){
    //     searchHistoryContainer.html("");

    //     for( let i = 0; i< searchHistory.length; I++) {
    //         let historyItemEl = $("<button>");
    //         // Add a click event listener to the button that will run our getWeatherData() function with the city name as an argument
    //         historyItemEl.attr("type", "button");
    //         historyItemEl.addClass("history-btn btn history");

    //         historyItemEl.attr("data-search", searchHistory[i]);
    //         historyItemEl.text(searchHistory[i]);
    //         searchHistoryContainer.append(historyItemEl);

   
    // creating a function to capture variables to display from Data found in Openwather.
    function renderCurrentWeather(city, WeatherData){
        let date = moment().format("DD/M/YYYY");
        let tempC = WeatherData["main"]["temp"];
        let windkph = WeatherData["wind"]["speed"];
        let humidity = weatherData["main"]["humidity"];

        let iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
        let iconDesction = WeatherData.weather[0].description || WeatherData[0].main
    
        // creating tags for the card holders.
        let card = $("<div>")
        let cardBody = $("<div>")

        let heading = $("<h2>")
        let tempElement = $("<p>")
        let windElement = $("<p>")

        let humidityElement = $("<p>")
           
    
    
    } 

    function submitSearchForm(event){
        event.preventDefault();
        let search = searchInput.val().trim()



    }
 
        
      function fetchCoord(search){
        let queryurl = `${weatherAPIUrl}/geo/1.0/direct?q=${search}&limit=5&api
        console.log(queryUrl);
    }





    
