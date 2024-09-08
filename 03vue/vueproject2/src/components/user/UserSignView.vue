<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="위치명"
        v-model="userdata.franname"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="위치 주소"
        v-model="userdata.addr"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="latitude"
        v-model="$store.state.mapMove.moveLat"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="longitude"
        v-model="$store.state.mapMove.moveLng"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="d-flex gap-2 justify-content-end">
      <div class="btn btn-outline-secondary" @click="addUser">장소추가</div>
      <router-link class="btn btn-outline-secondary " to="/user/modal">검색하기</router-link>
    </div>
  </div>
  <!-- <ModalView /> -->
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const userdata = ref({
  franname: null,
  addr: null,
  latitude: null,
  longitude: null,
  image: null,
});

const clearform = () => {
  (userdata.value.franname = null),
    (userdata.value.addr = null),
    (userdata.value.latitude = null),
    (userdata.value.longitude = null),
    (userdata.value.image = null);
};

const addUser = () => {
  let uData = {
    franname: userdata.value.franname,
    addr: userdata.value.addr,
    latitude: userdata.value.latitude,
    longitude: userdata.value.longitude,
    image: userdata.value.image,
  };
  store.commit("addUser", uData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userdata.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
