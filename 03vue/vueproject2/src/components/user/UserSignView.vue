<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="지점명"
        v-model="userdata.franname"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="지점 주소"
        v-model="userdata.addr"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="latitude"
        v-model="userdata.latitude"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="longitude"
        v-model="userdata.longitude"
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
    <div class="d-flex gap-2">
      <div class="btn btn-primary" @click="addUser">장소추가</div>
      <div class="btn btn-primary" @click="modalOpen">지도보기</div>
    </div>
  </div>
  <ModalView />
  {{ userdata }}
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import ModalView from "../../views/ModalView.vue";

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

const modalOpen = () => {
  store.state.isModal = true;
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
