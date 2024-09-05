<template>
  <SearchbarView @searchCity="searchCity" />
  <WeatherView :data="weatherData" @child-click="getCurrentPosition" />
</template>

<script setup></script>

<style lang="scss" scoped></style>
