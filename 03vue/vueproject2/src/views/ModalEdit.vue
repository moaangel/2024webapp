<template>
    <div class="modal-backdrop row gap-3">
      <div class="col-md-6"id="map4" style="width: 500px; height: 400px"></div>
      <div class="modal-content col-md-6">
        <h3>플레이스 변경</h3>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="위치명"
            v-model="editedItem.franname"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="위치 주소"
            v-model="editedItem.addr"
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="latitude"
            v-model.number="editedItem.latitude"
            @input="updateMap"
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="longitude"
            v-model.number="editedItem.longitude"
            @input="updateMap"
          />
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-primary" @click="save">저장</button>
          <button class="btn btn-secondary" @click="$emit('close')">취소</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    item: Object, 
  });
  
  const emit = defineEmits(['close', 'save']);
  const editedItem = ref({ ...props.item });
  
  watch(
    () => props.item,
    (newVal) => {
      editedItem.value = { ...newVal };
      updateMap();
    }
  );
  
  const updateMap = () => {
    const container = document.getElementById("map4");
    if (container && window.kakao && window.kakao.maps) {
      const latitude = parseFloat(editedItem.value.latitude) || 0;
      const longitude = parseFloat(editedItem.value.longitude) || 0;
  
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
  
      let map4 = new kakao.maps.Map(container, options);
  
      var markerPosition = new kakao.maps.LatLng(latitude, longitude);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map4,
      });
  
      marker.setDraggable(true);
  
      kakao.maps.event.addListener(marker, "dragend", function () {
        const position = marker.getPosition();
        editedItem.value.latitude = position.getLat();
        editedItem.value.longitude = position.getLng();
      });
    }
  };
  
  const save = () => {
    emit('save', editedItem.value); // 부모 컴포넌트에 저장 이벤트 전달
  };
  
  onMounted(() => {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(updateMap);
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f096f81f326844f383a7b6dfaa731eb3&libraries=services';
      document.head.appendChild(script);
    } else {
      updateMap(); // Kakao Maps API가 이미 로드된 경우
    }
  });
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
  }
  </style>
  