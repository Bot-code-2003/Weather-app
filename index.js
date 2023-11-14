const apiKey = "fed93326c16e64a95eae94565cc60a22";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = $(".search input");
const searchButton = $(".search button");
const weatherIcon = $(".weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + "" + city + "&appid=" + apiKey);
  if (response.status == 404) {
    $(".error").css("display", "block");
    $(".weather").css("display", "none");
  } else {
    $(".error").css("display", "none");
    $(".weather").css("display", "block");
    var data = await response.json();
    console.log(data);
    $(".city").text(data.name);
    $(".temp").text(Math.round(data.main.temp) + "°c");
    $(".humidity").text(data.main.humidity + "%");
    $(".wind").text(data.wind.speed + " km/hr");
    const weatherMain = data.weather[0].main.toLowerCase();
    weatherIcon.attr("src", `./images/${weatherMain}.png`);
    if (weatherMain === "clear") {
      $(".card").css(
        "background",
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
      );
      $(".weather>p").text("Clear");
    } else if (weatherMain === "rain") {
      $(".card").css(
        "background",
        "linear-gradient(90deg, rgba(30, 30, 30, 0.6) 0%, rgba(20, 20, 20, 0.7) 25%, rgba(10, 10, 10, 0.8) 50%, rgba(5, 5, 5, 0.9) 75%, rgba(2, 2, 2, 0.95) 100%)"
      );
      $(".weather>p").text("Rain");
    } else if (weatherMain === "clouds") {
      $(".card").css(
        "background",
        "linear-gradient(0deg, rgba(172,183,189,1) 0%, rgba(36,82,90,1) 100%)"
      );
      $(".weather>p").text("Cloudy");
    } else if (weatherMain === "rain") {
      $(".card").css(
        "background",
        "radial-gradient(circle, rgba(255,209,132,1) 0%, rgba(209,142,111,1) 100%)"
      );
      $(".weather>p").text("Haze");
    } else if (weatherMain === "mist") {
      $(".card").css(
        "background",
        "radial-gradient(circle, rgba(173,173,173,1) 0%, rgba(116,116,116,1) 100%)"
      );
      $(".weather>p").text("Mist");
    } else if (weatherMain === "smoke") {
      $(".card").css(
        "background",
        "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(169, 169, 169, 0.5) 100%)"
      );
      $(".weather>p").text("Smoky");
    } else if (weatherMain === "snow") {
      $(".card").css(
        "background",
        "linear-gradient(0deg, rgba(139,197,227,1) 0%, rgba(120,166,174,1) 100%)"
      );
      $(".weather>p").text("Snow");
    } else if (weatherMain === "drizzle") {
      $(".card").css(
        "background",
        "linear-gradient(90deg, rgba(200, 200, 200, 0.3) 0%, rgba(200, 200, 200, 0.5) 50%, rgba(200, 200, 200, 0.3) 100%)"
      );
      $(".weather>p").text("Drizzly");
    } else {
      $(".card").css(
        "background",
        "linear-gradient(90deg, rgba(164,199,79,1) 0%, rgba(56,186,173,1) 100%)"
      );
    }
  }
}

searchButton.click(function () {
  const city = searchBox.val();
  if (city) {
    checkWeather(city);
  } else {
    alert("Enter city name");
  }
});

searchBox.keypress(function (e) {
  if (e.which === 13) {
    const city = searchBox.val();
    if (city) {
      checkWeather(city);
    } else {
      alert("Enter city name");
    }
  }
});

checkWeather("kurnool");
