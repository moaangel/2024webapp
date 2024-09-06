<template>
  <div class="modal" v-if="$store.state.isModal">
    <div id="map3" style="width: 500px; height: 400px"></div>
    <button>좌표추가</button>
    <button @click="closeModal">닫기</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

const store = useStore();

const closeModal = () => {
  store.state.isModal = false;
};

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);

      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f096f81f326844f383a7b6dfaa731eb3";
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map3");
  var options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  var map3 = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map3);

  //지도 중심좌표
  kakao.maps.event.addListener(map3, "center_changed", function () {
    var latlng = map3.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  background-color: rgba(150, 0, 0, 0.5);
  //  opacity: 0.3;
  //  width: 100%;
  //  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
