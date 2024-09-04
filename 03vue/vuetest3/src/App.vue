<template>
  <div>
    <NavbarView />
    <SearchbarView @searchCity="searchCity" />
    <WeatherView :data="weatherData" />

    <div>
      <v-btn dark small depressed color="pink" @click="getCurrentPosition()"
        >위치 좌표 확인</v-btn
      >
      <div>{{ isPositionReady ? "yes" : "no" }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";

const positionObj = ref({ latitude: null, longitude: null });
const isPositionReady = ref(false);

const getCurrentPosition = () => {
  if (!navigator.geolocation) {
    setAlert("위치 정보를 찾을 수 없습니다.1");
  } else {
    navigator.geolocation.getCurrentPosition(
      getPositionValue,
      geolocationError
    );
  }
};

const getPositionValue = (val) => {
  positionObj.value.latitude = val.coords.latitude;
  positionObj.value.longitude = val.coords.longitude;
  isPositionReady.value = true;
  setAlert("주소 확인 완료");
  getWeather();
};

const geolocationError = () => {
  setAlert("위치 정보를 찾을 수 없습니다.2");
};

const setAlert = (text) => {
  alert(text);
};

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "jeju",
});

const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${positionObj.value.latitude}&lon=${positionObj.value.longitude}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data);

  weatherData.value.icon = res.data.weather[0].icon;
  weatherData.value.temp = res.data.main.temp;
  weatherData.value.text = res.data.weather[0].description;
  weatherData.value.location = res.data.sys.country;
  weatherData.value.city = res.data.name;
};

onMounted(() => {
  getWeather();
});

const searchCity = (city) => {
  console.log(city);
  weatherData.value.city = city;
  getWeather();
};
</script>

<style lang="scss" scoped></style>
