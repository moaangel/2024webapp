<template>
  <div class="MapWrap d-flex gap-5 justify-content-between">
    <div class="leftMap col-md-6">
      <h4>자유롭게 보는 지도</h4>
      <div>지도 {{ moveLat }} / {{ moveLng }}</div>
      <div id="map" style="width: 500px; height: 400px"></div>
    </div>
    <div class="rightMap col-md-6">
      <h4>위치마커 있는 지도</h4>
      <div>지도 {{ moveLat }} / {{ moveLng }}</div>
      <div id="map2" style="width: 500px; height: 400px"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex/types/index.js";

const store = useStore();

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);

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
  const container = document.getElementById("map");
  const container2 = document.getElementById("map2");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);
  let map2 = new kakao.maps.Map(container2, options);

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  //지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};

/// 우측 다중마커 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 마커 이미지 주소
const imageSrc = ref(
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"
);

for (var i = 0; i < store.state.userData.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map2, // 마커를 표시할 지도
    //position: store.state.userData[i].new kakao.maps.LatLng, // 마커를 표시할 위치  ..여기부터다시
    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });
}
</script>

<style lang="scss" scoped></style>
