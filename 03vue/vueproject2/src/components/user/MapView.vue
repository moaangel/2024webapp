<template>
  <div class="MapWrap">
    <div class="row d-flex justify-content-between ">
      <div class="leftMap col-md-6">
        <h4>플레이스 직접 찾기</h4>
        <div id="map" style="width: 500px; height: 400px"></div>
      </div>
      <div class="rightMap col-md-6">
        <h4>위시플레이스 보기</h4>
        <div id="map2" style="width: 500px; height: 400px"></div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { computed } from 'vue';


const store = useStore();

const latitude = ref(0);
const longitude = ref(0);

const moveLat = computed(() => store.getters.moveLat);
const moveLng = computed(() => store.getters.moveLng);

const markers = ref([]);
let map2 = null; // `map2`를 ref로 정의

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        script.onload = () => kakao.maps.load(initMap);
        script.src = 
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f096f81f326844f383a7b6dfaa731eb3&libraries=services';
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );

  // Vuex 상태 변화에 따른 마커 업데이트
  store.subscribe((mutation, state) => {
    if (mutation.type === "addUser" || mutation.type === "deleteUser" || mutation.type === "updateUser") {
      updateMarkers(); // 마커를 업데이트하는 함수 호출
    }
  });
});

const initMap = () => {
  const container = document.getElementById("map");
  const container2 = document.getElementById("map2");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  let map = new kakao.maps.Map(container, options);
  map2 = new kakao.maps.Map(container2, options); // map2에 할당

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setDraggable(true); 

  marker.setMap(map);

  kakao.maps.event.addListener(marker, "dragend", function () {
    store.dispatch('mapMoveAct', {
    lat: marker.getPosition().getLat(),
    lng: marker.getPosition().getLng(),
  });
  });

  updateMarkers(); // 지도가 초기화되면 마커를 추가합니다
};

const updateMarkers = () => {
  if (!map2) {
    console.error("맵2오류확인");
    return;
  }

  // 기존 마커를 모두 제거합니다
  markers.value.forEach((marker) => marker.setMap(null));
  markers.value = []; // 배열 비우기

  const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const positions = store.getters.positions; // Vuex의 getter를 사용하여 변환된 위치 데이터 가져오기

  positions.forEach((position, index) => {
  console.log(`Position ${index}:`, position.latlng); // 각 위치 데이터가 유효한 kakao.maps.LatLng 객체인지 확인
});
  for (let i = 0; i < positions.length; i++) {
    var imageSize = new kakao.maps.Size(24, 35);
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var marker = new kakao.maps.Marker({
      map: map2, // 마커를 표시할 지도
      position: positions[i].latlng, // 변환된 LatLng 객체 사용
      title: positions[i].title, // 마커의 타이틀
      image: markerImage, // 마커 이미지
    });

    marker.setMap(map2); // 마커가 지도 위에 표시되도록 설정합니다
    markers.value.push(marker);
  }

};

</script>

<style lang="scss">


</style>
