   
    // API endpoint and API key
    const weatherAPIUrl = "https://api.openweathermap.org";
    const apiKey = "6f719abf6675d9374814e4051324543d";


    let searchInput = $("#search-input");
    let searchForm = $("#search-form");
    let searchHistoryContainer = $("#history");

    function renderSearchHistory(){
        searchHistoryContainer.html("");

        for( let i = 0; i< searchHistory.length; I++) {
            let historyItemEl = $("<button>");
            // Add a click event listener to the button that will run our getWeatherData() function with the city name as an argument
            historyItemEl.attr("type", "button");
            historyItemEl.addClass("history-btn btn history");

            historyItemEl.attr("data-search", searchHistory[i]);
            historyItemEl.text(searchHistory[i]);
            searchHistoryContainer.append(historyItemEl);

        }
       
        }
 
        
      function fetchCoord(search){
        let queryurl = `${weatherAPIUrl}/geo/1.0/direct?q=${search}&limit=5

    }





})



