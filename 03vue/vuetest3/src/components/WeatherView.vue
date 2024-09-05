<template>
  <div class="weatherWrap w-full grid place-items-center">
    <div class="weather-info">
      <div class="icon">
        <img
          :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`"
          alt=""
        />
      </div>
    </div>
    <div class="temp">
      {{ ($store.state.weatherData.temp - 273.15).toFixed(2) }}&deg
    </div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">
      {{ $store.state.weatherData.location }} /
      {{ $store.state.weatherData.city }}
    </div>
    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click="$store.dispatch('getCurrentPosition')"
    >
      내 위치 날씨 보기
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
