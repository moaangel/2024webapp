import axios from "axios";
import { createStore } from "vuex";
import GeolocationApi from "vue-geolocation-api";

export default createStore({
  state: {
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "jeju",
    },
    positionObj: {
      latitude: 0,
      longitude: 0,
    },
    isPositionReady: false,
  },
  mutations: {
    updateData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    searchCity(state, payload) {
      state.weatherData.city = payload;
    },
    getPositionValue(state, payload) {
      state.positionObj.latitude = payload.coords.latitude;
      state.positionObj.longitude = payload.coords.longitude;
    },
  },
  actions: {
    async getWeather(context) {
      console.log("call");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${context.state.positionObj.latitude}&lon=${context.state.positionObj.longitude}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      context.commit("updateData", res.data);
    },
    async getWeatherCityVer(context) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      context.commit("updateData", res.data);
    },
    getCurrentPosition(context) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        context.commit("getPositionValue", pos);

        context.dispatch("getWeather");
      });
      //   navigator.geolocation.getCurrentPosition(
      //     context.commit("getPositionValue")
      //   );
    },
  },
});
