var vm = new Vue({
  el: "#app",
  data: {
    city: "北京",
    cityCode: {
      南京: "320100",
      北京: "110000",
      上海: "310000",
      广州: "440100",
      哈尔滨: "230100",
    },
    weatherList: [],
  },
  methods: {
    searchWeather: function () {
      console.log(this.city);

      // 缓存this
      var that = this;

      // 高德的天气查询API
      axios
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=612b3c32c1bd0eeec18c26f8933357cf&extensions=all&city=" +
            this.cityCode[this.city]
        )
        .then(function (resp) {
          that.weatherList = resp.data.forecasts[0].casts;
          console.log(that.weatherList);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    clickSearch: function (cityName) {
      this.city = cityName;

      this.searchWeather();
    },
  },
});
