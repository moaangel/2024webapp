<template>
  <div class="weatherWrap w-full grid place-items-center">
  <div class="weather-info">
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`"
        alt=""
      />
    </div>
  </div>
  <div class="temp">{{ (props.data.temp - 273.15).toFixed(2) }}&deg</div>
  <div class="text">{{ props.data.text }}</div>
  <div class="location">{{ props.data.location }} / {{ props.data.city }}</div>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="emitClickEvent">
        내 위치 날씨 보기
      </button>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
const emit = defineEmits(['child-click']);

function emitClickEvent() {
  emit('child-click');
}

</script>

<style lang="scss" scoped></style>
