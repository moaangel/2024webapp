<template>
  <div>
    <NavbarView />
    <SearchbarView />
    <WeatherView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
